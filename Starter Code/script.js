document.addEventListener("DOMContentLoaded", function () {
  const boxContainer = document.getElementById("box-container");
  const newBoxButton = document.getElementById("new-box-button");
  const colorForm = document.getElementById("color-form");
  const colorInput = document.getElementById("color-input");

  let boxColor = "black";
  let boxIdCounter = 1;

  // Set color for all boxes
  colorForm.addEventListener("submit", function (e) {
    e.preventDefault();

    boxColor = colorInput.value;

    const boxes = document.getElementsByClassName("box");
    for (let box of boxes) {
      box.style.backgroundColor = boxColor;
    }

    colorInput.value = "";
  });

  // Function to create a box
  function createBox() {
    const box = document.createElement("div");

    box.classList.add("box");
    box.style.backgroundColor = boxColor;

    box.innerText = boxIdCounter;
    box.setAttribute("data-id", boxIdCounter);

    boxIdCounter++;

    boxContainer.appendChild(box);
  }

  // Button click → new box
  newBoxButton.addEventListener("click", function () {
    createBox();
  });

  // Double click → remove box
  document.addEventListener("dblclick", function (e) {
    if (e.target.classList.contains("box")) {
      e.target.remove();
    }
  });

  // Hover → show coordinates
  document.addEventListener("mouseover", function (e) {
    if (e.target.classList.contains("box")) {
      e.target.innerText = `(${e.pageX}, ${e.pageY})`;
    }
  });

  // Mouse out → show ID again
  document.addEventListener("mouseout", function (e) {
    if (e.target.classList.contains("box")) {
      const id = e.target.getAttribute("data-id");
      e.target.innerText = id;
    }
  });

  // Press N → new box (ignore input typing)
  document.addEventListener("keydown", function (e) {
    if (e.target === colorInput) return;

    if (e.key === "n" || e.key === "N") {
      createBox();
    }
  });
});