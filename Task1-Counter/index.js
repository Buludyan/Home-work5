const state = {
	count: 0,
}

const countNum = document.querySelector('#countNum');

document.querySelector('#decrease').onclick = function() {
	state.count -= 1;
	countNum.innerText = state.count;

	if(state.count <= 0) {
		document.querySelector('#decrease').setAttribute('disabled', '');
	}
}

document.querySelector('#reset').onclick = function() {
	state.count = 0;
	countNum.innerText = state.count;
	document.querySelector('#decrease').setAttribute('disabled', '');
}

document.querySelector('#increase').onclick = function() {
	state.count += 1;
	countNum.innerText = state.count;
	if(state.count > 0) {
		document.querySelector('#decrease').removeAttribute('disabled')
	}
}

