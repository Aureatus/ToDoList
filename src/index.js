import { projectConstructor, generalLogic, projectsManager } from "./appLogic";
import { domManip } from "./appDomManip";
import "./style.css";
import { parseISO } from "date-fns";
import "normalize.css";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
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

const getFirestoreData = async () => {
  const database = getFirestore(app);
  const projects = await getDocs(collection(database, "Projects"));
  const toDoList = await getDocs(
    collection(database, "Projects", "Project 1", "ToDoList")
  );

  return { projects, toDoList };
};

// Initialize toDoList

const initializeToDoList = async () => {
  try {
    const { projects, toDoList } = await getFirestoreData();
    if (!projects) {
      let defaultProject = projectConstructor(
        "Default",
        "Default project created for all users."
      );
      projectsManager.pushProject(defaultProject);
      projectsManager.changeSelectedProject(0);
    }
    if (projects) {
      projects.forEach((doc) => {
        let tempProject = projectConstructor(
          doc.data().name,
          doc.data().description
        );
        projectsManager.pushProject(tempProject);
      });

      projectsManager.changeSelectedProject(0);
    }
    if (toDoList) {
      const projects = projectsManager.getProjects();
      projects.forEach((project, index) => {
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
      });
    }

    domManip().initialBuild(projectsManager.getProjects());
    generalLogic().addEventListeners().projectAddButtonEventListener();
    generalLogic().addEventListeners().projectSubmitButtonEventListener();
    let currentProject = projectsManager.getSelectedProject();
    domManip().toDoRender(currentProject);
    generalLogic().addEventListeners().addToDoButtonEventListener();
    generalLogic().addEventListeners().addToDoSubmitButtonEventListener();
    generalLogic().addEventListeners().editToDoButtonEventListener();
    generalLogic().addEventListeners().addToDoDialogEventListener();
    generalLogic().addEventListeners().signInWithGoogleEventListener();
  } catch (error) {
    console.error(error);
  }
};

initializeToDoList();

export { projectsManager };
