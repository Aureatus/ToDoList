//todo properties
/* title, description, dueDate, priority, notes */

// Use IIFE to createdefault "project" to put todos in, but let users create new projects and choose what projects the todos go in.

import { project } from "./appLogic";
import { domManip } from "./appDomManip";
import "./style.css";

let DefaultProject = project(
  "Default",
  "Default project created for all users."
);

domManip().initial();
