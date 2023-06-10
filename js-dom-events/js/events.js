console.log("This is separate JS file");

// option 2: add onclick function
// we will use this important!
function makeRed() {
  document.body.style.backgroundColor = "red";
}

// option : 3
const makeBlueButton = document.getElementById("make-blue");
makeBlueButton.onclick = makeBlue;

function makeBlue() {
  document.body.style.backgroundColor = "blue";
}

// option 3 another
// [we will use this sometimes]
const purpleButton = document.getElementById("make-purple");
purpleButton.onclick = function makePurple() {
  document.body.style.backgroundColor = "purple";
};

// option 4
const pinkButton = document.getElementById("make-pink");
pinkButton.addEventListener("click", makepink);

function makepink() {
  document.body.style.backgroundColor = "pink";
}

// option 4 another
const greenButton = document.getElementById("make-green");
greenButton.addEventListener("click", function makeGreen() {
  document.body.style.backgroundColor = "green";
});

// option 4 final
// important , we will use this sometimes
document.getElementById("make-goldenrod").addEventListener("click", function() {
  document.body.style.backgroundColor = "goldenrod";
});
