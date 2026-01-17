// // Creating element through js

// const header1 = document.createElement("h1");
// header1.innerText = "Hello Coder Army";
// header1.style.backgroundColor = "blue";
// header1.style.fontSize = "30px";
// header1.style.color = "white";

// const header2 = document.createElement("h2");
// header2.innerText = "Kya haal chaal";
// header2.style.backgroundColor = "black";
// header2.style.fontSize = "30px";
// header2.style.color = "white";

// const root = document.getElementById("root");
// // root.appendChild(header1);
// // root.appendChild(header2);
// // +++ shorthand for line 16 and 17 ++++++++++
// root.append(header1, header2);

// ++++++++++++++ creating function for upper code +++++++++++++++++++
// upar wale code ko function me convert kr raha hu:-->

// Note:-> element.style["color"] = element.style.color (Both are same)

const React = {
  createElement: function (tag, styles, children) {
    const element = document.createElement(tag);

    if (Array.isArray(children)) {
      for (let val of children) {
        element.appendChild(val);
      }
    } else if (children !== undefined && children !== null) {
      element.textContent = children;
    }
    
    if (styles) {
      for (let key in styles) {
        element.style[key] = styles[key];
      }
    }

    return element; // ✅ VERY IMPORTANT
  },
};

const header1 = React.createElement(
  "h1",
  { fontSize: "30px", backgroundColor: "blue", color: "white" },
  "hello Coder Army",
);

const header2 = React.createElement(
  "h2",
  { fontSize: "30px", backgroundColor: "black", color: "white" },
  "Kya Haal chaal",
);

// create ul and add html, css, js
const li1 = React.createElement("li", {}, "HTML");
const li2 = React.createElement("li", {}, "CSS");
const li3 = React.createElement("li", {}, "JS");

const ul = React.createElement(
  "ul",
  {
    fontSize: "30px",
    backgroundColor: "blue",
    color: "white",
  },
  [li1, li2, li3],
);

// const root = document.getElementById("root");
// root.appendChild(header1);
// root.appendChild(header2);
// +++ shorthand for line 67 and 68 ++++++++++
// root.append(header1, header2);

// function for line 50 to 54:---->
const ReactDOM = {
  render: function (element, root) {
    root.append(element);
  },
};

ReactDOM.render(header1, document.getElementById("root"));
ReactDOM.render(header2, document.getElementById("root"));
ReactDOM.render(ul, document.getElementById("root"));
