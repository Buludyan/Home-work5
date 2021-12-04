const state = {
	dollars: 0,
	drams: 0,
	currentСoefficient: 490
}

const dollarsInput = document.querySelector('#dollar');
const dram = document.querySelector('#dram');

const convertDollars = (dollars) => {
	if(isNaN(dollars) && dollars.length > 0) {
		dram.style.color = 'red'
		return 'Enter correct value';
	} else {
		dram.style.color = 'green'
		return dollars * state.currentСoefficient;
	}
}

dollarsInput.onkeyup = function() {
	state.dollars = dollarsInput.value;

	state.drams = convertDollars(state.dollars);

	dram.setAttribute('value', state.drams)
}