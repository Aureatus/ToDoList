//todo properties
/* title, description, dueDate, priority, notes */

// Use IIFE to createdefault "project" to put todos in, but let users create new projects and choose what projects the todos go in.

import { project } from "./appLogic";

let DefaultProject = project(
  "Default",
  "Default project created for all users."
);
