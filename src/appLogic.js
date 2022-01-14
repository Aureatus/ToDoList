const project = (name, description) => {
  const getName = () => name;
  const getDescription = () => description;
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

export { todo };
