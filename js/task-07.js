const slider = document.getElementById("font-size-control");
const span = document.getElementById("text");

slider.addEventListener("input", handleInputRange);

function handleInputRange(event) {
  span.style.fontSize = event.currentTarget.value + "px";
}

(function () {
  const range = document.querySelector("#font-size-control");
  const text = document.querySelector("#text");
  range.addEventListener("input", function () {
    text.style.fontSize = range.value + "px";
  });
})();
