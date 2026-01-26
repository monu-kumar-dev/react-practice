const element = React.createElement("h1", {}, "Hello Coder Army");

// ReactDOM.render(element,document.getElementById('root'));
// element : 50 card pade hue hai

// ReactDOM.render() is deprecated in React 18
// React 18 uses createRoot for better performance and concurrent rendering
// createRoot allows React to manage updates more efficiently

// const reactRoot = ReactDOM.createRoot(document.getElementById("root"));
// Reactroot.render(element);

// Line 10 & 11 more details:->
const container = document.getElementById("root");
const reactRoot = ReactDOM.createRoot(container);

reactRoot.render(element);
