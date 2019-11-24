import {combineReducers} from 'redux';
import {QUESTION_ANSWER} from './actions'


function score(state = 0, action = {}){
	switch(action.type) {
		case 'SUBMIT':
			for (var i = 0; i <= action.payload.questions.length -1; i++){
				if(action.payload.questions[i].answer === action.payload.questions[i].userAnswer){
					state = state +1;
				}
			}
			return state;
		default:
			return state;
	}
}
function finished(state = false, action = {}){
	switch(action.type) {
		case 'SUBMIT':
			state = true;
			return state;
		case 'RESET':
			state = false;
			return state;
		default:
			return state;
	}
}
function currentQuestion(state = 0, action = {}){
	switch(action.type) {
		case 'NEXT_QUESTION':
			state +=1;
			return state;
		case 'PREVIOUS_QUESTION':
			state-=1;
			return state;
		default:
			return state;
	}
}
function questions(state = [], action = {}){
	switch(action.type) {
		case QUESTION_ANSWER:
			return state.map((question,i)=> {
				return { ...question,
						userAnswer: action.payload.index === i ? action.payload.answer : question.userAnswer}
			})
		case 'INIT_QUESTION':
			if(action.payload.questions.length !== 0){
				state = action.payload.questions;
			}
			return state;
		default:
			return state;

	}	
}
const GlobalState = (combineReducers({
	score,
	finished,
	currentQuestion,
	questions
}));

export default GlobalState;