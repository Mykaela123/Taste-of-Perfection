// Select the button element
const btn = document.querySelector("button");

 

// Define a function that returns a random number between 0 and the given number
function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

 

// Add an event listener to the button that changes the background color of the page to a random color when clicked
btn.addEventListener("click", () => {
  // Generate a random RGB color value
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  // Set the background color of the page to the random color value
  document.body.style.backgroundColor = rndCol;
});