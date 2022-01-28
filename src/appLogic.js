import { domManip } from "./appDomManip";

const projectConstructor = (name, description) => {
  const getName = () => name;
  const getDescription = () => description;
  let ToDoList = [];
  const addToDo = (title, description, dueDate, priority) => {
    let toDoObject = toDo(title, description, dueDate, priority);
    ToDoList.push(toDoObject);
  };
  return {
    getName,
    getDescription,
    addToDo,
    ToDoList,
  };
};

const toDo = (title, description, dueDate, priority) => {
  // priority should be ASAP, soon and not urgent.
  const getTitle = () => title;
  const getDescription = () => description;
  const getDueDate = () => dueDate;
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
        let toDoHeader = document.querySelector(".toDoHeader");
        toDoHeader.textContent = `${projectsManager
          .getSelectedProject()
          .getName()} project`;
      });
    };

    const projectEventListener = () => {
      let projects = document.querySelectorAll(".project");
      projects.forEach((e, index) => {
        projects[index].addEventListener("click", () => {
          projectsManager.changeSelectedProject(index);
          let toDoHeader = document.querySelector(".toDoHeader");
          toDoHeader.textContent = `${projectsManager
            .getSelectedProject()
            .getName()} project`;
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
        let currentProject = projectsManager.getSelectedProject();
        currentProject.addToDo(...Object.values(ToDoFormDataGrabber()));
      });
    };

    return {
      projectAddButtonEventListener,
      projectSubmitButtonEventListener,
      projectEventListener,
      addToDoButtonEventListener,
      addToDoSubmitButtonEventListener,
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
    let ToDoDueDate = ToDoForm.elements[2].value;
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
