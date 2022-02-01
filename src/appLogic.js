import { domManip } from "./appDomManip";
import { format, parseISO } from "date-fns";

const projectConstructor = (name, description) => {
  const getName = () => name;
  const getDescription = () => description;
  let ToDoList = [];
  const addToDo = (title, description, dueDate, priority) => {
    let toDoObject = toDo(title, description, dueDate, priority);
    ToDoList.push(toDoObject);
    ToDoList.sort((a, b) => {
      return a.getDueDate() - b.getDueDate();
    });
  };
  return {
    getName,
    getDescription,
    addToDo,
    ToDoList,
  };
};

const toDo = (title, description, dueDate, priority) => {
  const getTitle = () => title;
  const getDescription = () => description;
  const getDueDate = () => dueDate;
  const getFormattedDueDate = () => {
    if (getDueDate() != "Invalid Date") {
      return format(getDueDate(), "dd-MM-yyyy");
    }
  };
  const getPriority = () => priority;
  let complete = false;
  const taskCompleted = () => {
    complete = true;
  };
  const isTaskComplete = () => {
    return complete;
  };
  const changePriority = () => {};
  return {
    getTitle,
    getDescription,
    getDueDate,
    getFormattedDueDate,
    getPriority,
    taskCompleted,
    isTaskComplete,
    changePriority,
  };
};

const generalLogic = () => {
  const projectDirectoryModule = () => {
    const projectList = [];
    const getProjects = () => {
      return projectList;
    };
    const pushProject = (input) => {
      projectList.push(input);
      return;
    };
    const removeProject = (input) => {
      projectList.splice(input);
      return;
    };
    let SelectedProject;
    const getSelectedProject = () => {
      return SelectedProject;
    };
    const changeSelectedProject = (input) => {
      SelectedProject = getProjects()[input];
      let currentProject = projectsManager.getSelectedProject();
      domManip().toDoClear();
      domManip().toDoRender(currentProject);
    };
    return {
      getProjects,
      pushProject,
      removeProject,
      getSelectedProject,
      changeSelectedProject,
    };
  };

  const addEventListeners = () => {
    const projectAddButtonEventListener = () => {
      let projectAddButton = document.querySelector(".projectAdd");
      projectAddButton.addEventListener("click", () => {
        if (projectsManager.getProjects().length >= 12) {
          alert("You are at max project capacity!");
          return;
        }
        document.querySelector("#projectAdd").showModal();
      });
    };
    const projectSubmitButtonEventListener = () => {
      let submitButton = document.querySelector("input[type=submit]");
      submitButton.addEventListener("click", () => {
        let tempProject = projectConstructor(
          ...Object.values(ProjectFormDataGrabber())
        );
        if (
          ProjectFormDataGrabber().projectName == "" ||
          ProjectFormDataGrabber().projectDescription == ""
        ) {
          return;
        }
        projectsManager.pushProject(tempProject);
        domManip().projectClear();
        domManip().projectRender(projectsManager.getProjects());
        projectsManager.changeSelectedProject(
          projectsManager.getProjects().length - 1
        );
        let currentProjectHeader = document.querySelector(
          ".currentProjectHeader"
        );
        currentProjectHeader.textContent = `${projectsManager
          .getSelectedProject()
          .getName()} project`;
      });
    };

    const projectEventListener = () => {
      let projects = document.querySelectorAll(".project");
      projects.forEach((e, index) => {
        projects[index].addEventListener("click", () => {
          projectsManager.changeSelectedProject(index);
          let currentProjectHeader = document.querySelector(
            ".currentProjectHeader"
          );
          currentProjectHeader.textContent = `${projectsManager
            .getSelectedProject()
            .getName()} project`;
          let currentProject = projectsManager.getSelectedProject();
          deleteToDoButtonEventListener(currentProject);
        });
      });
    };

    const addToDoButtonEventListener = () => {
      let button = document.querySelector(".addToDo");
      button.addEventListener("click", () => {
        let ToDoDialog = document.querySelector("#toDoDialog");
        ToDoDialog.showModal();
      });
    };

    const addToDoSubmitButtonEventListener = () => {
      let button = document.querySelector(
        "#toDoDialog > form > input[type=submit]"
      );
      button.addEventListener("click", () => {
        if (
          ToDoFormDataGrabber().ToDoName === "" ||
          ToDoFormDataGrabber().ToDoDescription === "" ||
          ToDoFormDataGrabber().ToDoDueDate == "Invalid Date"
        ) {
          return;
        }
        let currentProject = projectsManager.getSelectedProject();
        currentProject.addToDo(...Object.values(ToDoFormDataGrabber()));
        domManip().toDoClear();
        domManip().toDoRender(currentProject);
        deleteToDoButtonEventListener(currentProject);
      });
    };

    const deleteToDoButtonEventListener = (currentProject) => {
      let deleteButtons = document.querySelectorAll(".delete");
      deleteButtons.forEach((element, index) => {
        deleteButtons[index].addEventListener("click", () => {
          let toDo =
            deleteButtons[index].parentElement.parentElement.parentElement;
          let toDoIndex = toDo.classList[0] - 1;
          currentProject.ToDoList.splice(toDoIndex);
          domManip().toDoClear();
          domManip().toDoRender(currentProject);
        });
      });
    };
    return {
      projectAddButtonEventListener,
      projectSubmitButtonEventListener,
      projectEventListener,
      addToDoButtonEventListener,
      addToDoSubmitButtonEventListener,
      deleteToDoButtonEventListener,
    };
  };

  const ProjectFormDataGrabber = () => {
    let forms = document.forms;
    let projectName = forms[0].elements[0].value;
    let projectDescription = forms[0].elements[1].value;
    return {
      projectName,
      projectDescription,
    };
  };

  const ToDoFormDataGrabber = () => {
    let forms = document.forms;
    let ToDoForm = forms[1];
    let ToDoName = ToDoForm.elements[0].value;
    let ToDoDescription = ToDoForm.elements[1].value;
    let ToDoDueDate = parseISO(ToDoForm.elements[2].value);
    let ToDoPriority = ToDoForm.elements[3].value;
    return {
      ToDoName,
      ToDoDescription,
      ToDoDueDate,
      ToDoPriority,
    };
  };

  return {
    projectDirectoryModule,
    addEventListeners,
    ProjectFormDataGrabber,
    ToDoFormDataGrabber,
  };
};

const projectsManager = generalLogic().projectDirectoryModule();
export { projectConstructor, generalLogic, projectsManager };
