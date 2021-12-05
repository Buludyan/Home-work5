const state = {
	imageSrc: ''
}

const fileInput = document.querySelector('#fileInput');
const submit = document.querySelector('#submit');
const output = document.querySelector('#output');



errorMessageCreator = () => {
	const errorMessage = document.createElement('p');
	errorMessage.style.color = 'red';
	errorMessage.innerText = 'Input is empty';
	errorMessage.setAttribute('id', 'error')

	return errorMessage;
}

imageCreator = () => {
	const image = document.createElement('img');
	image.setAttribute('id', 'image');
	image.setAttribute('src', state.imageSrc);

	return image;
}

submit.onclick = function(event) {
	event.preventDefault();
	if(document.querySelector('#image')) {
		output.removeChild(document.querySelector('#image'));
	}
	if(state.imageSrc.length === 0) {
		const errorMessage = errorMessageCreator();
		output.appendChild(errorMessage);
	} else {
		if(document.querySelector('#error')) {
			output.removeChild(document.querySelector('#error'));
		}
		const image = imageCreator();
		output.appendChild(image);
	}
}

fileInput.onchange = function(event) {
	state.imageSrc = URL.createObjectURL(event.srcElement.files[0]);
	submit.style.backgroundColor = '#4af26a';
}