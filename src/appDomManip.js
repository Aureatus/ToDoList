import { sum } from "lodash";
import "./style.css";
import { generalLogic } from "./appLogic";

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
      input1.required = true;
      let input2 = document.createElement("input");
      input2.type = "text";
      input2.id = "projectDescription";
      input2.required = true;
      let submit = document.createElement("input");
      submit.type = "submit";
      let details = document.createElement("details");
      details.open = true;
      details.classList.add("projectSectionContainer");
      let summary = document.createElement("summary");
      summary.textContent = "Projects";
      let toDoSection = document.createElement("toDoSection");
      return {
        container,
        h1,
        projectSection,
        projects,
        addProjectButton,
        dialog,
        form,
        label1,
        label2,
        input1,
        input2,
        submit,
        details,
        summary,
        toDoSection,
      };
    };

    const elementInsertion = (
      container,
      h1,
      projectSection,
      projects,
      addProjectButton,
      dialog,
      form,
      label1,
      label2,
      input1,
      input2,
      submit,
      details,
      summary,
      toDoSection
    ) => {
      document.body.appendChild(container);
      container.appendChild(h1);
      container.appendChild(details);
      details.appendChild(summary);
      details.appendChild(projectSection);
      projectSection.appendChild(projects);
      projectSection.appendChild(addProjectButton);
      projectSection.appendChild(dialog);
      dialog.appendChild(form);
      form.appendChild(label1);
      form.appendChild(input1);
      form.appendChild(label2);
      form.appendChild(input2);
      form.appendChild(submit);
      container.appendChild(toDoSection);
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
    generalLogic().addEventListeners().projectEventListener();
  };
  const projectClear = () => {
    let projects = document.querySelectorAll(".project");
    projects.forEach((e, index) => {
      projects[index].remove();
    });
  };
  return {
    initialBuild,
    projectRender,
    initialBuildFuncs,
    projectClear,
  };
};

export { domManip };
