//todo properties
/* title, description, dueDate, priority, notes */

// Use IIFE to createdefault "project" to put todos in, but let users create new projects and choose what projects the todos go in.

import { projectConstructor, generalLogic, projectsManager } from "./appLogic";
import { domManip } from "./appDomManip";
import "./style.css";

let defaultProject = projectConstructor(
  "Default",
  "Default project created for all users."
);

projectsManager.pushProject(defaultProject);
projectsManager.changeSelectedProject(0);

domManip().initialBuild(projectsManager.getProjects());
generalLogic().addEventListeners().projectAddButtonEventListener();
generalLogic().addEventListeners().projectSubmitButtonEventListener();
generalLogic().addEventListeners().addToDoButtonEventListener();
generalLogic().addEventListeners().addToDoSubmitButtonEventListener();

export { projectsManager };
