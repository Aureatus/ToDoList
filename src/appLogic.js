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

    return {
      getProjects,
      pushProject,
      removeProject,
    };
  };

  const addEventListeners = () => {
    const projectAddButtonEventListener = () => {
      let projectAddButton = document.querySelector(".projectAdd");
      projectAddButton.addEventListener("click", () => {
        document.querySelector("#projectAdd").showModal();
      });
    };
    const submitButtonEventListener = () => {
      let submitButton = document.querySelector("input[type=submit]");
      submitButton.addEventListener("click", () => {
        document.querySelector("#projectAdd").close();
        let tempProject = projectConstructor(
          ...Object.values(FormDataGrabber())
        );
        projectsManager.pushProject(tempProject);
        console.log(projectsManager.getProjects());
      });
    };
    projectAddButtonEventListener();
    submitButtonEventListener();
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
