"use strict";
const hexForm = document.getElementById("hex-form");
const hexInput = document.getElementById("hex-input");
const circle = document.getElementById("circle");
const circleSpan = document.querySelector("#circle span");
const binaryForm = document.getElementById("binary-form");
const binaryInput = document.getElementById("binary-input");
const decimalSpan = document.getElementById("decimal-span");
const result = document.getElementById("result");
const colorDisplayButton = document.getElementById("color-display-button");
const binaryDisplayButton = document.getElementById("binary-display-button");
const colorFinderSection = document.getElementById("color-finder");
const binaryConverterSection = document.getElementById("binary-converter");
hexForm.addEventListener("submit", handleHexSubmit);
binaryForm.addEventListener("submit", handleBinarySubmit);
colorDisplayButton.addEventListener("click", handleColorDisplayClick);
binaryDisplayButton.addEventListener("click", handleBinaryDisplayClick);
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
function handleBinarySubmit(event) {
    event.preventDefault();
    const decimal = binaryInput.value;
    const binary = dec2binary(+decimal);
    if (decimal) {
        decimalSpan.textContent = decimal;
        setTimeout(() => {
            result.textContent = binary;
        }, 500);
    }
    else {
        alert("Please enter a number and try again.");
    }
}
function dec2binary(dec) {
    return (dec >>> 0).toString(2);
}
function handleColorDisplayClick() {
    colorFinderSection.style.display = "block";
    binaryConverterSection.style.display = "none";
}
function handleBinaryDisplayClick() {
    binaryConverterSection.style.display = "block";
    colorFinderSection.style.display = "none";
}
