//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function () {
  const textInput = document.getElementById("text");
  const delayInput = document.getElementById("delay");
  const outputDiv = document.getElementById("output");
  const submitBtn = document.getElementById("btn");

  submitBtn.addEventListener("click", async function () {
    const text = textInput.value;
    const delay = parseInt(delayInput.value);

    if (text.trim() === "" || isNaN(delay) || delay <= 0) {
      outputDiv.textContent = "Please enter valid text and delay.";
      return;
    }

    outputDiv.textContent = "Waiting...";
    await delayFunction(delay);
    outputDiv.textContent = text;
  });

  function delayFunction(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
});

