import { projectsManager } from "./appLogic";

const saveProjectListData = () => {
  let projectNames = [];
  let projectDescriptions = [];
  projectsManager.getProjects().forEach((element, index, array) => {
    projectNames.push(array[index].getName());
    projectDescriptions.push(array[index].getDescription());
  });

  localStorage.setItem("projectNames", JSON.stringify(projectNames));
  localStorage.setItem(
    "projectDescriptions",
    JSON.stringify(projectDescriptions)
  );
};

const saveToDoListData = () => {
  let toDos = [];
  projectsManager.getProjects().forEach((element, index, array) => {
    let toDoList = [];
    let toDoTitles = [];
    let toDoDescriptions = [];
    let toDoDueDates = [];
    let toDoFormattedDueDates = [];
    let toDoPriorities = [];
    array[index].ToDoList.forEach(
      (element,
      (index) => {
        toDoTitles.push(index.getTitle());
        toDoDescriptions.push(index.getDescription());
        toDoDueDates.push(index.getDueDate());
        toDoFormattedDueDates.push(index.getFormattedDueDate());
        toDoPriorities.push(index.getPriority());
      })
    );
    for (let i = 0; i < toDoTitles.length; i++) {
      let tempToDo = [];
      tempToDo.push(
        toDoTitles[i],
        toDoDescriptions[i],
        toDoDueDates[i],
        toDoFormattedDueDates[i],
        toDoPriorities[i]
      );
      toDoList.splice(i, 0, tempToDo);
    }
    toDos.push(toDoList);
  });
  localStorage.setItem("toDos", JSON.stringify(toDos));
};

export { saveProjectListData, saveToDoListData };
