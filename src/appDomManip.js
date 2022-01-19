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

  const projectRender = () => {
    let projects = document.querySelector("projects");
    console.log(projects);
    for (let i = 1; i <= 12; i++) {
      let project = document.createElement("project");
      project.classList.add(i);
      project.textContent = `Project ${i}`;
      projects.appendChild(project);
    }
  };
  return {
    initial,
    projectRender,
  };
};

export { domManip };
