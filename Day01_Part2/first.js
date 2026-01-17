// ================= MINI REACT =================

const React = {
  createElement(tag, styles = {}, children = null) {
    const element = document.createElement(tag);

    // Handle children
    if (Array.isArray(children)) {
      children.forEach((child) => {
        if (typeof child === "string") {
          element.append(document.createTextNode(child));
        } else {
          element.append(child);
        }
      });
    } else if (typeof children === "string") {
      element.textContent = children;
    }

    // Apply styles
    Object.assign(element.style, styles);

    return element;
  },
};

// ================= MINI REACT DOM =================

const ReactDOM = {
  render(element, root) {
    if (!root) {
      console.error("Root element not found");
      return;
    }
    root.append(element);
  },
};

// ================= COMPONENTS =================

// Headers
const header1 = React.createElement(
  "h1",
  { fontSize: "30px", backgroundColor: "blue", color: "white" },
  "Hello Coder Army",
);

const header2 = React.createElement(
  "h2",
  { fontSize: "25px", backgroundColor: "black", color: "white" },
  "Kya Haal Chaal",
);

// List items
const li1 = React.createElement("li", {}, "HTML");
const li2 = React.createElement("li", {}, "CSS");
const li3 = React.createElement("li", {}, "JavaScript");

const ul = React.createElement(
  "ul",
  {
    fontSize: "20px",
    backgroundColor: "purple",
    color: "white",
    padding: "10px",
  },
  [li1, li2, li3],
);

// ================= RENDER =================

const root = document.getElementById("root");

ReactDOM.render(header1, root);
ReactDOM.render(header2, root);
ReactDOM.render(ul, root);
