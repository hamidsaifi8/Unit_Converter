var feet = document.getElementById("feet");
var inch = document.getElementById("Inch");

feet.addEventListener("input", function () {
  inch.value = this.value * 12;
});

inch.addEventListener("input", function () {
  feet.value = this.value / 12;

  if (!Number.isInteger(feet.value)) {
    feet.value = feet.value.toFixed(2);
  }
});
