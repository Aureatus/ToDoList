import { projectConstructor, generalLogic, projectsManager } from "./appLogic";
import { domManip } from "./appDomManip";
import { saveProjectToFirebase } from "./saveLogic";
import "./style.css";
import "normalize.css";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  where,
  query,
} from "firebase/firestore";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7rCXHLR3KQtc0ZBjw-Lp_cHbewhduMK0",
  authDomain: "todolist-deabf.firebaseapp.com",
  projectId: "todolist-deabf",
  storageBucket: "todolist-deabf.appspot.com",
  messagingSenderId: "164175545050",
  appId: "1:164175545050:web:47540ffd431cbb2b37dbe3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

const getFirestoreProjectData = async () => {
  const database = getFirestore(app);
  if (auth.currentUser === null) {
    return undefined;
  }
  const projectsRef = collection(database, "Projects");
  const userProjectsQuery = query(
    projectsRef,
    where("uid", "==", auth.currentUser.uid)
  );

  const userProjectsResults = await getDocs(userProjectsQuery);

  return userProjectsResults;
};

// Create functions required to initalize toDoList

const getProjectData = async () => {
  const projects = await getFirestoreProjectData();

  if (projects.docs.length === 0) {
    let defaultProject = projectConstructor(
      "Default",
      "Default project created for all users."
    );
    projectsManager.pushProject(defaultProject);
    saveProjectToFirebase(defaultProject);
  }
  if (projects) {
    projects.forEach((doc) => {
      let tempProject = projectConstructor(
        doc.data().name,
        doc.data().description
      );
      projectsManager.pushProject(tempProject);
    });
  }
};

const getToDoData = async () => {
  const localProjects = projectsManager.getProjects();
  localProjects.forEach(async (project, index) => {
    const database = getFirestore(app);
    const toDoList = await getDocs(
      collection(database, "Projects", project.getName(), "ToDoList")
    );
    if (toDoList) {
      toDoList.docs.forEach((doc) => {
        projectsManager
          .getProjects()
          [index].addToDo(
            doc.data().title,
            doc.data().description,
            new Date(doc.data().dueDate.seconds * 1000),
            doc.data().priority
          );
      });
      projectsManager.changeSelectedProject(0);
      generalLogic().addEventListeners().editToDoButtonEventListener();
    }
  });
};

const domInitalize = () => {
  domManip().initialBuild(projectsManager.getProjects());
  generalLogic().addEventListeners().projectAddButtonEventListener();
  generalLogic().addEventListeners().projectSubmitButtonEventListener();
  generalLogic().addEventListeners().addToDoButtonEventListener();
  generalLogic().addEventListeners().addToDoSubmitButtonEventListener();
  generalLogic().addEventListeners().addToDoDialogEventListener();
};

// Initialize toDoList

const getData = async () => {
  try {
    await getProjectData();
    await getToDoData();
  } catch (error) {
    console.error(error);
  }
};

const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  await signInWithPopup(getAuth(), provider);
  document.body.removeChild(document.querySelector(".sign-in"));
  await getData();
  domInitalize();
};

(async () => {
  let signInWithGoogleButton = document.createElement("button");
  signInWithGoogleButton.textContent = "Sign in";
  signInWithGoogleButton.classList.add("sign-in");
  document.body.appendChild(signInWithGoogleButton);
  document.querySelector(".sign-in").addEventListener("click", () => {
    signInWithGoogle();
  });
})();

export { projectsManager, app };
