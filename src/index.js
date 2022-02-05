//todo properties
/* title, description, dueDate, priority, notes */

// Use IIFE to createdefault "project" to put todos in, but let users create new projects and choose what projects the todos go in.

import { projectConstructor, generalLogic, projectsManager } from "./appLogic";
import { domManip } from "./appDomManip";
import "./style.css";
import { parseISO } from "date-fns";
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

export { projectsManager };
