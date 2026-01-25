const element = React.createElement(
  "h1",
  {
    id: "first",
    className: "Rahul",
    style: { backgroundColor: "blue", fontSize: "30px", color: "pink" },
  },
  "Hello Coder Army",
);

const element2 = React.createElement(
  "h1",
  {
    id: "second",
    className: "Rahul",
    style: { backgroundColor: "black", fontSize: "30px", color: "pink" },
  },
  "HEllo ji kya haal chaal",
);

// ReactDOM.render() is deprecated in React 18
// React 18 uses createRoot for better performance and concurrent rendering
// createRoot allows React to manage updates more efficiently

// const reactRoot = ReactDOM.createRoot(document.getElementById("root"));
// Line 7 more details:->
const container = document.getElementById("root");
const reactRoot = ReactDOM.createRoot(container);

// reactRoot.render(element);
// reactRoot.render(element2);

// Note:-> here we render two element element1 and element2 but in render property display the last one.And one more things agr iske parent me bhi jaise root me bhi kuch rhegaa to render replace kr degaa.

// what we can do for display both:--> (Create a div and solve this problem)

// +++++++++++ Creating div +++++++++++

const div1 = React.createElement("div", {}, [element, element2]);

reactRoot.render(div1);
