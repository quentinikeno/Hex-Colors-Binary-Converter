const hexForm = document.getElementById("hex-form")!;
const hexInput = document.getElementById("hex-input")! as HTMLInputElement;

hexForm.addEventListener("submit", handleHexSubmit);

function handleHexSubmit(event: SubmitEvent) {
	event.preventDefault();

	console.log(hexInput.value);
}
