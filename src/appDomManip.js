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
      let dialog = document.createElement("dialog");
      dialog.id = "projectAdd";
      let form = document.createElement("form");
      form.method = "dialog";
      let label1 = document.createElement("label");
      label1.textContent = "Project Name";
      label1.for = "projectName";
      let label2 = document.createElement("label");
      label2.textContent = "Project Description";
      label2.for = "projectDescription";
      let input1 = document.createElement("input");
      input1.type = "text";
      input1.id = "projectName";
      input1.required = "true";
      let input2 = document.createElement("input");
      input2.type = "text";
      input2.id = "projectDescription";
      input2.required = "true";
      let submit = document.createElement("input");
      submit.type = "submit";
      return {
        container,
        h1,
        projectSection,
        projects,
        addProjectButton,
        projecth2,
        dialog,
        form,
        label1,
        label2,
        input1,
        input2,
        submit,
      };
    };

    const elementInsertion = (
      container,
      h1,
      projectSection,
      projects,
      addProjectButton,
      projecth2,
      dialog,
      form,
      label1,
      label2,
      input1,
      input2,
      submit
    ) => {
      document.body.appendChild(container);
      document.querySelector("container").appendChild(h1);
      document.querySelector("container").appendChild(projectSection);
      projectSection.appendChild(projecth2);
      projectSection.appendChild(projects);
      projectSection.appendChild(addProjectButton);
      projectSection.appendChild(dialog);
      dialog.appendChild(form);
      form.appendChild(label1);
      form.appendChild(input1);
      form.appendChild(label2);
      form.appendChild(input2);
      form.appendChild(submit);
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
