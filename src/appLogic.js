const project = (name, description) => {
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

export { project };
