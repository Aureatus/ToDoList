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
  const getTitle = () => title;
  const getDescription = () => description;
  const getDueDate = () => dueDate;
  const getPriority = () => priority;
  return {
    getTitle,
    getDescription,
    getDueDate,
    getPriority,
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
    let SelectedProject = getProjects()[0];
    const getSelectedProject = () => {
      return SelectedProject;
    };
    const changeSelectedProject = (input) => {
      SelectedProject = getProjects()[input];
      console.log(getSelectedProject().getName());
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
    const submitButtonEventListener = () => {
      let submitButton = document.querySelector("input[type=submit]");
      submitButton.addEventListener("click", () => {
        let tempProject = projectConstructor(
          ...Object.values(FormDataGrabber())
        );
        projectsManager.pushProject(tempProject);
        domManip().projectClear();
        domManip().projectRender(projectsManager.getProjects());
      });
    };

    const projectEventListener = () => {
      let projects = document.querySelectorAll(".project");
      projects.forEach((e, index) => {
        projects[index].addEventListener("click", () => {
          projectsManager.changeSelectedProject(index);
        });
      });
    };

    return {
      projectAddButtonEventListener,
      submitButtonEventListener,
      projectEventListener,
    };
  };

  const FormDataGrabber = () => {
    let forms = document.forms;
    let projectName = forms[0].elements[0].value;
    let projectDescription = forms[0].elements[1].value;
    return {
      projectName,
      projectDescription,
    };
  };

  return {
    projectDirectoryModule,
    addEventListeners,
    FormDataGrabber,
  };
};

const projectsManager = generalLogic().projectDirectoryModule();
export { projectConstructor, generalLogic, projectsManager };
