// Creating element through js

const header1 = document.createElement("h1");
header1.innerText = "Hello Coder Army";
header1.style.backgroundColor = "blue";
header1.style.fontSize = "30px";
header1.style.color = "white";

const header2 = document.createElement("h2");
header2.innerText = "Kya haal chaal";
header2.style.backgroundColor = "black";
header2.style.fontSize = "30px";
header2.style.color = "white";

const root = document.getElementById("root");
// root.appendChild(header1);
// root.appendChild(header2);
// +++ shorthand for line 16 and 17 ++++++++++
root.append(header1, header2);




