import "./style.css";

// Create a module containing all needed DOM manipulators.

const domManip = () => {
  const initial = () => {
    let body = document.body;
    let container = document.createElement("container");
    body.appendChild(container);
    let h1 = document.createElement("h1");
    h1.textContent = "ToDo List";
    container.appendChild(h1);
    let projects = document.createElement("projects");
    container.appendChild(projects);
  };

  const projectRender = (projects) => {
    let projectHolder = document.querySelector("projects");

    projects.forEach((element, index) => {
      let project = document.createElement("button");
      project.classList.add("project");
      project.classList.add(index + 1);
      project.textContent = projects[index].getName();
      projectHolder.appendChild(project);
    });

    let projectDOM = document.querySelector("projects");
    let addProjectButton = document.createElement("button");
    addProjectButton.classList.add("projectAdd");
    addProjectButton.textContent = "+";
    projectDOM.appendChild(addProjectButton);
  };
  return {
    initial,
    projectRender,
  };
};

export { domManip };
