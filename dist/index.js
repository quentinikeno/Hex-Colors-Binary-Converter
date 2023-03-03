"use strict";
const hexForm = document.getElementById("hex-form");
const hexInput = document.getElementById("hex-input");
const circle = document.getElementById("circle");
const circleSpan = document.querySelector("#circle span");
hexForm.addEventListener("submit", handleHexSubmit);
function handleHexSubmit(event) {
    event.preventDefault();
    const hex = hexInput.value;
    const isHex = /^#[0-9A-F]{6}$/i.test(hex);
    if (isHex) {
        circle.style.backgroundColor = hex;
        circleSpan.textContent = hex.toUpperCase();
    }
    else {
        alert("Please enter a valid hex code and try again.");
    }
}
