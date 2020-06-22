import "./styles.css";

// JAVASCRIPT AND THE DOM
console.log(document.body);

// Document methods - Properties (output), Methods
//https://developer.mozilla.org/en-US/docs/Web/API/Document#Methods

const logo = document.querySelector("#logo");
logo.textContent = "hiya";

const heading = document.createElement("h2");
heading.innerHTML = "<span>hi</span> " + document.URL;
console.log(heading);

// Node
// https://developer.mozilla.org/en-US/docs/Web/API/Node

document.body.appendChild(heading);
console.log(document.URL);

// Node, Element, Attribute - of current web page (document.)

// Generate random colour rgb 0-255
// Uses single responsibility functions

const generateColourValue = () => Math.floor(Math.random() * 256);

const createColour = () => {
  const red = generateColourValue();
  const green = generateColourValue();
  const blue = generateColourValue();
  return `rgb(${red}, ${green}, ${blue})`;
};

// Apply to DOM
const applyColourToBody = colour =>
  (document.body.style.backgroundColor = colour);

const addRandomColourToBg = () => {
  const colour = createColour();
  return applyColourToBody(colour);
};

addRandomColourToBg();
