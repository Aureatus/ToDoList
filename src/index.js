//todo properties
/* title, description, dueDate, priority, notes */

// Use IIFE to createdefault "project" to put todos in, but let users create new projects and choose what projects the todos go in.

import { projectConstructor, generalLogic } from "./appLogic";
import { domManip } from "./appDomManip";
import "./style.css";

let defaultProject = projectConstructor(
  "Default",
  "Default project created for all users."
);

let Test = generalLogic();
Test.projectDirectoryModule().pushProject(defaultProject);

domManip().initialBuild(Test.projectDirectoryModule().getProjects());
generalLogic().addEventListeners();
