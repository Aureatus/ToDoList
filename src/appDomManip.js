import { sum } from "lodash";
import "./style.css";
import { generalLogic, projectsManager } from "./appLogic";

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
      label1.htmlFor = "projectName";
      let label2 = document.createElement("label");
      label2.textContent = "Project Description";
      label2.htmlFor = "projectDescription";
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
      let toDoHeader = document.createElement("h2");
      toDoHeader.classList.add("toDoHeader");
      let toDoContent = document.createElement("toDoContent");
      let addToDoButton = document.createElement("button");
      addToDoButton.classList.add("addToDo");
      let toDoDialog = document.createElement("dialog");
      toDoDialog.id = "toDoDialog";
      let toDoForm = document.createElement("form");
      toDoForm.method = "dialog";
      let toDoSubmit = document.createElement("input");
      toDoSubmit.type = "submit";
      let toDoTitleLabel = document.createElement("label");
      toDoTitleLabel.htmlFor = "titleInput";
      toDoTitleLabel.textContent = "Title";
      let toDoTitleInput = document.createElement("input");
      toDoTitleInput.id = "titleInput";
      toDoTitleInput.required = true;
      let toDoDescriptionLabel = document.createElement("label");
      toDoDescriptionLabel.htmlFor = "descriptionInput";
      toDoDescriptionLabel.textContent = "Description";
      let toDoDescriptionInput = document.createElement("input");
      toDoDescriptionInput.id = "descriptionInput";
      toDoDescriptionInput.required = true;
      let toDoDueDateLabel = document.createElement("label");
      toDoDueDateLabel.htmlFor = "dueDateInput";
      toDoDueDateLabel.textContent = "Due date";
      let toDoDueDateInput = document.createElement("input");
      toDoDueDateInput.id = "dueDateInput";
      toDoDueDateInput.type = "date";
      toDoDueDateInput.required = true;
      let toDoPriorityLabel = document.createElement("label");
      toDoPriorityLabel.htmlFor = "priorityInput";
      toDoPriorityLabel.textContent = "Priority";
      let toDoPrioritySelector = document.createElement("select");
      toDoPrioritySelector.id = "priorityInput";
      let toDoPrioritySelectorASAP = document.createElement("option");
      toDoPrioritySelectorASAP.value = "ASAP";
      toDoPrioritySelectorASAP.textContent = toDoPrioritySelectorASAP.value;
      let toDoPrioritySelectorSoon = document.createElement("option");
      toDoPrioritySelectorSoon.value = "Soon";
      toDoPrioritySelectorSoon.textContent = toDoPrioritySelectorSoon.value;
      let toDoPrioritySelectorNotUrgent = document.createElement("option");
      toDoPrioritySelectorNotUrgent.value = "Not Urgent";
      toDoPrioritySelectorNotUrgent.textContent =
        toDoPrioritySelectorNotUrgent.value;
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
        toDoHeader,
        toDoContent,
        addToDoButton,
        toDoDialog,
        toDoForm,
        toDoSubmit,
        toDoTitleInput,
        toDoTitleLabel,
        toDoDescriptionInput,
        toDoDescriptionLabel,
        toDoDueDateInput,
        toDoDueDateLabel,
        toDoPriorityLabel,
        toDoPrioritySelector,
        toDoPrioritySelectorASAP,
        toDoPrioritySelectorSoon,
        toDoPrioritySelectorNotUrgent,
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
      toDoSection,
      toDoHeader,
      toDoContent,
      addToDoButton,
      toDoDialog,
      toDoForm,
      toDoSubmit,
      toDoTitleInput,
      toDoTitleLabel,
      toDoDescriptionInput,
      toDoDescriptionLabel,
      toDoDueDateInput,
      toDoDueDateLabel,
      toDoPriorityLabel,
      toDoPrioritySelector,
      toDoPrioritySelectorASAP,
      toDoPrioritySelectorSoon,
      toDoPrioritySelectorNotUrgent
    ) => {
      document.body.appendChild(container);
      container.append(h1, details);
      details.append(summary, projectSection);
      projectSection.append(projects, addProjectButton, dialog);
      dialog.appendChild(form);
      form.append(label1, input1, label2, input2, submit);
      container.appendChild(toDoSection);
      toDoSection.append(toDoHeader, toDoContent, toDoDialog);
      toDoContent.append(addToDoButton);
      toDoDialog.append(toDoForm);
      toDoForm.append(
        toDoTitleLabel,
        toDoTitleInput,
        toDoDescriptionLabel,
        toDoDescriptionInput,
        toDoDueDateLabel,
        toDoDueDateInput,
        toDoPriorityLabel,
        toDoPrioritySelector,
        toDoSubmit
      );
      toDoPrioritySelector.append(
        toDoPrioritySelectorASAP,
        toDoPrioritySelectorSoon,
        toDoPrioritySelectorNotUrgent
      );
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
