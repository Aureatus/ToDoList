import { projectConstructor, generalLogic, projectsManager } from "./appLogic";
import { domManip } from "./appDomManip";
import "./style.css";
import { parseISO } from "date-fns";
import "normalize.css";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
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

const storageData = {};
(function () {
  let projectNames = JSON.parse(localStorage.getItem("projectNames"));
  let projectDescriptions = JSON.parse(
    localStorage.getItem("projectDescriptions")
  );
  let toDos = JSON.parse(localStorage.getItem("toDos"));
  if (projectNames) {
    storageData.projectNames = projectNames;
  }
  if (projectDescriptions) {
    storageData.projectDescriptions = projectDescriptions;
  }
  if (toDos) {
    storageData.toDos = toDos;
  }
})();
if (!storageData.projectNames && !storageData.projectDescriptions) {
  let defaultProject = projectConstructor(
    "Default",
    "Default project created for all users."
  );
  projectsManager.pushProject(defaultProject);
  projectsManager.changeSelectedProject(0);
} else if (
  storageData.projectNames ||
  storageData.projectDescriptions ||
  storageData.toDos
) {
  for (let i = 0; i < storageData.projectNames.length; i++) {
    let tempProject = projectConstructor(
      storageData.projectNames[i],
      storageData.projectDescriptions[i]
    );
    projectsManager.pushProject(tempProject);
  }
  projectsManager.changeSelectedProject(0);
}

if (storageData.toDos) {
  for (let i = 0; i < storageData.toDos.length; i++) {
    storageData.toDos[i].forEach((element, index, array) => {
      projectsManager
        .getProjects()
        [i].addToDo(element[0], element[1], parseISO(element[2]), element[4]);
    });
  }
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
export { projectsManager };
