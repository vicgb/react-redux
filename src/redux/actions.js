export const QUESTION_ANSWER = 'QUESTION_ANSWER';
export const SUBMIT = 'SUBMIT';
export const NEXT_QUESTION = 'NEXT_QUESTION';
export const PREVIOUS_QUESTION = 'PREVIOUS_QUESTION';
export const INIT_QUESTION = 'INIT_QUESTION';
export const RESET = 'RESET';


export function questionAnswer(index, answer){
	return {type: QUESTION_ANSWER, payload:{index,answer}}
}

export function submit(questions){
	return {type: SUBMIT, payload:{questions}}
}

export function nextQuestion(index){
	return {type: NEXT_QUESTION, payload:{index}}
}

export function previousQuestion(index){
	return {type: PREVIOUS_QUESTION, payload:{index}}
}

export function initQuestions(questions){
	return {type: INIT_QUESTION, payload:{questions}}
}

export function resetQuestions(){
	return {type: RESET}
}

