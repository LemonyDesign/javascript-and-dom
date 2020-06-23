import "./styles.css";

// JAVASCRIPT AND THE DOM
console.log(document.body);

// Document methods - Properties (output), Methods
//https://developer.mozilla.org/en-US/docs/Web/API/Document#Methods

const logo = document.querySelector("#logo");
logo.textContent = "Company Logo";

const heading = document.createElement("h2");
heading.innerHTML = "Character set <span>" + document.charset + "</span>";

// Nodes
// https://developer.mozilla.org/en-US/docs/Web/API/Node

document.body.appendChild(heading);

// Node, Element, Attribute - of current web page (document.)

const generateDarkColourValue = () => {
  const min = Math.ceil(0);
  const max = Math.floor(50);
  return Math.floor(Math.random() * (max - min) + min);
};

const generateLightColourValue = () => {
  const min = Math.ceil(200);
  const max = Math.floor(256);
  return Math.floor(Math.random() * (max - min) + min);
};

const createColour = colourMode => {
  let red, green, blue;
  if (colourMode === "dark") {
    red = generateDarkColourValue();
    green = generateDarkColourValue();
    blue = generateDarkColourValue();
  }
  if (colourMode === "light") {
    red = generateLightColourValue();
    green = generateLightColourValue();
    blue = generateLightColourValue();
  }
  return `rgb(${red}, ${green}, ${blue})`;
};

// Events
// On click attach 1 event
// newColours.onclick = () => addRandomColourToBg();
let colourMode = "light";
document.body.style.backgroundColor = createColour(colourMode);

const newColours = document.querySelector("#new-colours");
newColours.className = "btn";

const radios = document.querySelectorAll("input[name='mode']");
const labels = document.querySelectorAll("label");

const setColourMode = () => {
  radios.forEach(radio =>
    radio.addEventListener("click", event => {
      colourMode = event.target.value;
      addRandomColourToBg(event.target.value);

      if (event.target.value === "dark") {
        labels.forEach(label => (label.style.color = "white"));
        heading.style.color = "white";
        logo.style.color = "white";
      }
      if (event.target.value === "light") {
        labels.forEach(label => (label.style.color = "black"));
        heading.style.color = "black";
        logo.style.color = "black";
      }
    })
  );
};

const applyColourToBody = colour =>
  (document.body.style.backgroundColor = colour);

const addRandomColourToBg = () => {
  const colour = createColour(colourMode);
  return applyColourToBody(colour);
};

newColours.addEventListener("click", addRandomColourToBg);

setColourMode();
