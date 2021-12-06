const state = {
	questions: {
		question1: {
			question: 'Question 1?',
			answer: 'Answer 1',
			visibility: 'hidden',
			sign: '+'
		}, 
		question2: {
			question: 'Question 2?',
			answer: 'Answer 2',
			visibility: 'hidden',
			sign: '+'
		},
		question3: {
			question: 'Question 3?',
			answer: 'Answer 3',
			visibility: 'hidden',
			sign: '+'
		},
		question4: {
			question: 'Question 4?',
			answer: 'Answer 4',
			visibility: 'hidden',
			sign: '+'
		}
	}
}


const render = function() {
	for(let question in state.questions) {
		const questionData = state.questions[question];
		document.querySelector('#questions').innerHTML += `
			<div class="question">
				<div id="questionBody">
					<p>${questionData.question}</p>
					<button class="button">${questionData.sign}</button>
				</div>
				<p class="answer" style="visibility: ${questionData.visibility};"">${questionData.answer}</p>
			</div>
		`
	}

	const showButton = document.querySelectorAll('.button');
	for(let i = 0; i < showButton.length; ++i) {
		showButton[i].onclick = function () {
			for(let question in state.questions) {
				if(+question[question.length - 1] === i + 1) {
					if(state.questions[question].visibility === 'hidden') {
						state.questions[question].visibility = 'visible';
						state.questions[question].sign = '-'
					} else {
						state.questions[question].visibility = 'hidden';
						state.questions[question].sign = '+';
					}
				} else {
					state.questions[question].visibility = 'hidden';
					state.questions[question].sign = '+';
				}
			}
			document.querySelector('#questions').innerHTML = ''; 
			render()
		}
	}
}

render()