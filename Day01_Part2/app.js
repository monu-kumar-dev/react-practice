const element = React.createElement("h1", {}, "Hello Coder Army");

// ReactDOM.render() is deprecated in React 18
// React 18 uses createRoot for better performance and concurrent rendering
// createRoot allows React to manage updates more efficiently

// const reactRoot = ReactDOM.createRoot(document.getElementById("root"));
// Line 7 more details:->
const container = document.getElementById("root");
const reactRoot = ReactDOM.createRoot(container);

reactRoot.render(element);
