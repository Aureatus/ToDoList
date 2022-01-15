import "./style.css";

// Create a module containing all needed DOM manipulators.

const domManip = () => {
  const initial = () => {
    let body = document.body;
    let container = document.createElement("container");
    body.appendChild(container);
  };
  return {
    initial,
  };
};

export { domManip };
