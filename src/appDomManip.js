import "./style.css";

// Create a module containing all needed DOM manipulators.

const domManip = () => {
  const initialBuildFuncs = () => {
    const elementCreation = () => {
      let container = document.createElement("container");
      let h1 = document.createElement("h1");
      h1.textContent = "ToDo List";
      let projectSection = document.createElement("projectSection");
      let projects = document.createElement("projects");
      let addProjectButton = document.createElement("button");
      addProjectButton.classList.add("projectAdd");
      addProjectButton.textContent = "+";
      let projecth2 = document.createElement("h2");
      projecth2.textContent = "Projects";

      return {
        container,
        h1,
        projectSection,
        projects,
        addProjectButton,
        projecth2,
      };
    };

    const elementInsertion = (
      container,
      h1,
      projectSection,
      projects,
      addProjectButton,
      projecth2
    ) => {
      document.body.appendChild(container);
      document.querySelector("container").appendChild(h1);
      document.querySelector("container").appendChild(projectSection);
      projectSection.appendChild(projecth2);
      projectSection.appendChild(projects);
      projectSection.appendChild(addProjectButton);
    };

    return {
      elementCreation,
      elementInsertion,
    };
  };
  const initialBuild = (input) => {
    let elements = Object.values(initialBuildFuncs().elementCreation());
    initialBuildFuncs().elementInsertion(...elements);
    projectRender(input);
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
  };
  return {
    initialBuild,
    projectRender,
    initialBuildFuncs,
  };
};

export { domManip };
