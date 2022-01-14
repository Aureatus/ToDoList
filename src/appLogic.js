const project = (name, description) => {
  const getName = () => name;
  const getDescription = () => description;
  let ToDoList = [];
  const addTodo = (title, description, dueDate, priority) => {
    let todoObject = todo(title, description, dueDate, priority);
    ToDoList.push(todoObject);
  };
  return {
    getName,
    getDescription,
    addTodo,
    ToDoList,
  };
};

const todo = (title, description, dueDate, priority) => {
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

export { todo, project };
