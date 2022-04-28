import { projectsManager } from "./appLogic";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, deleteDoc, setDoc, doc } from "firebase/firestore";
import { getAuth } from "firebase/auth";

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

const saveProjectToFirebase = async (project) => {
  const database = getFirestore(app);

  await setDoc(doc(database, "Projects", project.getName()), {
    name: project.getName(),
    description: project.getDescription(),
    uid: getAuth().currentUser.uid,
  });
};

const saveToDoToProject = async (
  projectName,
  title,
  description,
  dueDate,
  priority,
  spliceLocation
) => {
  const database = getFirestore(app);

  if (spliceLocation) {
    await setDoc(doc(database, "Projects", projectName, "ToDoList", title), {
      title: title,
      description: description,
      dueDate: dueDate,
      priority: priority,
      spliceLocation: spliceLocation,
    });
  } else {
    await setDoc(doc(database, "Projects", projectName, "ToDoList", title), {
      title: title,
      description: description,
      dueDate: dueDate,
      priority: priority,
    });
  }
};

const saveToDoEdit = async (
  projectName,
  oldTitle,
  newTitle,
  description,
  dueDate,
  priority,
  spliceLocation
) => {
  const database = getFirestore(app);
  await deleteDoc(doc(database, "Projects", projectName, "ToDoList", oldTitle));
  await setDoc(doc(database, "Projects", projectName, "ToDoList", newTitle), {
    title: newTitle,
    description: description,
    dueDate: dueDate,
    priority: priority,
    spliceLocation: spliceLocation,
  });
};

const saveToDoDelete = async (projectName, title) => {
  const database = getFirestore(app);
  await deleteDoc(doc(database, "Projects", projectName, "ToDoList", title));
};

export {
  saveProjectToFirebase,
  saveToDoToProject,
  saveToDoEdit,
  saveToDoDelete,
};
