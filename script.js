const inputValue = document.getElementById("user-input");

// Number buttons event listener
document.querySelectorAll(".numbers").forEach(function (item) {
  item.addEventListener("click", function (e) {
    if (inputValue.innerText === "NaN" || inputValue.innerText === "0") {
      inputValue.innerText = "";
    }
    inputValue.innerText += e.target.innerHTML.trim();
  });
});

// Operation buttons event listener
document.querySelectorAll(".operations").forEach(function (item) {
  item.addEventListener("click", function (e) {
    let lastValue = inputValue.innerText.substring(inputValue.innerText.length - 1);

    if (!isNaN(lastValue) && e.target.innerHTML === "=") {
      inputValue.innerText = eval(inputValue.innerText);
    } else if (e.target.innerHTML === "AC") {
      inputValue.innerText = "0";
    } else if (e.target.innerHTML === "DEL") {
      inputValue.innerText = inputValue.innerText.substring(0, inputValue.innerText.length - 1);
      if (inputValue.innerText.length === 0) {
        inputValue.innerText = "0";
      }
    } else {
      if (!isNaN(lastValue) || e.target.innerHTML === ".") {
        inputValue.innerText += e.target.innerHTML;
      }
    }
  });
});
