//todo properties
/* title, description, dueDate, priority, notes */

// Use IIFE to createdefault "project" to put todos in, but let users create new projects and choose what projects the todos go in.

import { todo } from "./appLogic";

let todo1 = todo("a", "b", "c", "d");
console.log(todo1);
console.log(todo1.getTitle());
console.log(todo1.getDescription());
console.log(todo1.getDueDate());
console.log(todo1.getPriority());
