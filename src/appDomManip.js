import "./style.css";
import { generalLogic, projectsManager } from "./appLogic";

const domManip = () => {
  const initialBuildFuncs = () => {
    const elementCreation = () => {
      let container = document.createElement("container");
      let header = document.createElement("header");
      let signInWithGoogleButton = document.createElement("button");
      signInWithGoogleButton.textContent = "Sign in";
      signInWithGoogleButton.classList.add("sign-in");
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
      let currentProjectHeader = document.createElement("h2");
      currentProjectHeader.classList.add("currentProjectHeader");
      let toDoContent = document.createElement("toDoContent");
      let addToDoButton = document.createElement("button");
      addToDoButton.classList.add("addToDo");
      addToDoButton.textContent = "New Task";
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
      let toDos = document.createElement("toDos");
      return {
        container,
        header,
        h1,
        signInWithGoogleButton,
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
        currentProjectHeader,
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
        toDos,
      };
    };

    const elementInsertion = (
      container,
      header,
      h1,
      signInWithGoogleButton,
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
      currentProjectHeader,
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
      toDos
    ) => {
      document.body.appendChild(container);
      header.appendChild(h1);
      header.appendChild(signInWithGoogleButton);
      container.append(header, details);
      details.append(summary, projectSection);
      projectSection.append(projects, addProjectButton, dialog);
      dialog.appendChild(form);
      form.append(label1, input1, label2, input2, submit);
      container.appendChild(toDoSection);
      toDoSection.append(currentProjectHeader, toDoContent, toDoDialog);
      toDoContent.append(toDos, addToDoButton);
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
    let currentProjectHeader = document.querySelector(".currentProjectHeader");
    currentProjectHeader.textContent = `${projectsManager
      .getProjects()[0]
      .getName()}`;
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

  const toDoRender = (currentProject) => {
    let toDoHolder = document.querySelector("todos");
    let ToDos = currentProject.ToDoList;
    ToDos.forEach((element, index) => {
      let toDo = document.createElement("toDo");
      toDo.classList.add(index + 1);
      let details = document.createElement("details");
      let summary = document.createElement("summary");
      details.append(summary);
      toDo.append(details);
      let toDoTitle = document.createElement("toDoTitle");
      toDoTitle.textContent = currentProject.ToDoList[index].getTitle();
      summary.append(toDoTitle);
      let toDoDate = document.createElement("toDoDate");
      toDoDate.textContent =
        currentProject.ToDoList[index].getFormattedDueDate();
      summary.append(toDoDate);
      let toDoDeleteButton = document.createElement("button");
      toDoDeleteButton.classList.add("delete");
      toDoDeleteButton.textContent = "X";
      summary.append(toDoDeleteButton);
      toDoHolder.append(toDo);
      let toDoDescription = document.createElement("todoDescription");
      toDoDescription.textContent =
        currentProject.ToDoList[index].getDescription();
      details.append(toDoDescription);
      let toDoPriority = document.createElement("toDoPriority");
      toDoPriority.textContent = currentProject.ToDoList[index].getPriority();
      details.append(toDoPriority);
      let toDoEdit = document.createElement("button");
      toDoEdit.textContent = "Edit";
      toDoEdit.classList.add("edit");
      details.append(toDoEdit);
      switch (toDoPriority.textContent) {
        case "ASAP":
          details.classList.add("ASAP");
          break;
        case "Soon":
          details.classList.add("Soon");
          break;
        case "Not Urgent":
          details.classList.add("notUrgent");
          break;
      }
    });
    generalLogic()
      .addEventListeners()
      .deleteToDoButtonEventListener(currentProject);
  };
  const toDoClear = () => {
    let toDos = document.querySelectorAll("todo");
    toDos.forEach((e, index) => {
      toDos[index].remove();
    });
  };

  const createEditForm = (input) => {
    let currentTitle = input.children[0].children[0].textContent;
    let currentDescription = input.children[1].textContent;
    let currentPriority = input.children[2].textContent;
    let editDialog = document.createElement("dialog");
    editDialog.id = "editDialog";
    let editForm = document.createElement("form");
    editForm.method = "dialog";
    let editSubmit = document.createElement("input");
    editSubmit.type = "submit";
    let editTitleLabel = document.createElement("label");
    editTitleLabel.htmlFor = "titleInput";
    editTitleLabel.textContent = "Title";
    let editTitleInput = document.createElement("input");
    editTitleInput.id = "titleInput";
    editTitleInput.required = true;
    editTitleInput.value = currentTitle;
    let editDescriptionLabel = document.createElement("label");
    editDescriptionLabel.htmlFor = "descriptionInput";
    editDescriptionLabel.textContent = "Description";
    let editDescriptionInput = document.createElement("input");
    editDescriptionInput.id = "descriptionInput";
    editDescriptionInput.required = true;
    editDescriptionInput.value = currentDescription;
    let editDueDateLabel = document.createElement("label");
    editDueDateLabel.htmlFor = "dueDateInput";
    editDueDateLabel.textContent = "Due date";
    let editDueDateInput = document.createElement("input");
    editDueDateInput.id = "dueDateInput";
    editDueDateInput.type = "date";
    editDueDateInput.required = false;
    let editPriorityLabel = document.createElement("label");
    editPriorityLabel.htmlFor = "priorityInput";
    editPriorityLabel.textContent = "Priority";
    let editPrioritySelector = document.createElement("select");
    editPrioritySelector.id = "priorityInput";
    let editPrioritySelectorASAP = document.createElement("option");
    editPrioritySelectorASAP.value = "ASAP";
    editPrioritySelectorASAP.textContent = editPrioritySelectorASAP.value;
    let editPrioritySelectorSoon = document.createElement("option");
    editPrioritySelectorSoon.value = "Soon";
    editPrioritySelectorSoon.textContent = editPrioritySelectorSoon.value;
    let editPrioritySelectorNotUrgent = document.createElement("option");
    editPrioritySelectorNotUrgent.value = "Not Urgent";
    editPrioritySelectorNotUrgent.textContent =
      editPrioritySelectorNotUrgent.value;
    editPrioritySelector.value = currentPriority;

    editDialog.append(editForm);
    editPrioritySelector.append(
      editPrioritySelectorASAP,
      editPrioritySelectorSoon,
      editPrioritySelectorNotUrgent
    );
    editForm.append(
      editTitleLabel,
      editTitleInput,
      editDescriptionLabel,
      editDescriptionInput,
      editDueDateLabel,
      editDueDateInput,
      editPriorityLabel,
      editPrioritySelector,
      editSubmit
    );
    input.append(editDialog);
  };
  return {
    initialBuild,
    projectRender,
    initialBuildFuncs,
    projectClear,
    toDoRender,
    toDoClear,
    createEditForm,
  };
};

export { domManip };
