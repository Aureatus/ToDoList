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
  };
  return {
    initial,
  };
};

export { domManip };
