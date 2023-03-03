"use strict";
const hexForm = document.getElementById("hex-form");
const hexInput = document.getElementById("hex-input");
hexForm.addEventListener("submit", handleHexSubmit);
function handleHexSubmit(event) {
    event.preventDefault();
    console.log(hexInput.value);
}
