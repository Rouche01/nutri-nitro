import { surveySection, surveyQuestions } from '../questions/SurveyQuestions';
import * as actionTypes from './actionTypes';

const initialState = {
    counter: 0,
    questionId: 1,
    sectionCounter: 0,
    // section: 'demography',
    answers: {
        demography: [],
        eatingHabits: []
    },
    inputVal: null,
    userInfo: {
        email: '',
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ANSWER_SURVEY:
            let newState;
            console.log(action.inputValue);
            if(!state.answers[surveySection[state.sectionCounter]].some(answer => answer.id === state.questionId)) {
                // if it does not exist, we create a new answer
                let newAnswer = {
                     dataKey: surveyQuestions[surveySection[state.sectionCounter]][state.counter].dataKey,
                     id: state.questionId,
                     answer: action.inputValue
                    //  this.textInputRef.current.value
                }
                newState = {
                    ...state,
                    answers: {
                        ...state.answers,
                        [surveySection[state.sectionCounter]]: state.answers[surveySection[state.sectionCounter]].concat(newAnswer)
                    },
                    inputVal: action.inputValue
                }
            } else if (state.answers[surveySection[state.sectionCounter]].some(answer => answer.id === state.questionId) 
            && state.answers[surveySection[state.sectionCounter]][state.counter].answer !== action.inputValue) {
                newState = {
                    ...state,
                    inputVal: action.inputValue,
                    answers: {
                        ...state.answers,
                        [surveySection[state.sectionCounter]]: state.answers[surveySection[state.sectionCounter]].map((ans, i) => {
                            if (i === state.counter) {
                                return {...ans, answer: action.inputValue}
                            } else {
                                return ans
                            }
                        })
                    }
                }
            } else {
                newState = {
                    ...state,
                    inputVal: action.inputValue,
                }
            }
            return newState;
        case actionTypes.MOVE_TO_NEXT_QUESTION:
            return {
                ...state,
                counter: state.counter + 1,
                questionId: state.questionId + 1,
            }
        case actionTypes.SUBMIT_ANSWERS_CHECKED:
            let newStateChecked;
            if(!state.answers[surveySection[state.sectionCounter]].some(answer => answer.id === state.questionId)) {
                let newAnswer = {
                    dataKey: surveyQuestions[surveySection[state.sectionCounter]][state.counter].dataKey,
                    id: state.questionId,
                    answer: action.checkedValues
               }
                newStateChecked = {
                    ...state,
                    answers: {
                        ...state.answers,
                        [surveySection[state.sectionCounter]]: state.answers[surveySection[state.sectionCounter]].concat(newAnswer)
                    },
                    inputVal: action.checkedValues,
                }
            } else if(state.answers[surveySection[state.sectionCounter]].some(answer => answer.id === state.questionId) 
            && state.answers[surveySection[state.sectionCounter]][state.counter].answer !== action.checkedValues){
                newStateChecked = {
                    ...state,
                    inputVal: action.checkedValues,
                    answers: {
                        ...state.answers,
                        [surveySection[state.sectionCounter]]: state.answers[surveySection[state.sectionCounter]].map((ans, i) => {
                            if (i === state.counter) {
                                return {...ans, answer: action.checkedValues}
                            } else {
                                return ans
                            }
                        })
                    }
                }
            } else {
                newStateChecked = {
                    ...state,
                    inputVal: action.checkedValues,
                }
            }
            return newStateChecked;
        case actionTypes.PREVIOUS_QUESTION:
            return {
                ...state,
                counter: state.counter - 1,
                questionId: state.questionId - 1,
                inputVal: state.answers[surveySection[state.sectionCounter]][state.counter - 1].answer
            }
        case actionTypes.SELECT_SURVEY:
            let newStateSelect;
            if(!state.answers[surveySection[state.sectionCounter]].some(answer => answer.id === state.questionId)) {
                // if it does not exist, we create a new answer
                let newAnswer = {
                    dataKey: surveyQuestions[surveySection[state.sectionCounter]][state.counter].dataKey,
                    id: state.questionId,
                    answer: action.selectedValue
                   //  e.target.value
               }

               newStateSelect = {
                   ...state,
                    answers: {
                        ...state.answers,
                        [surveySection[state.sectionCounter]]: state.answers[surveySection[state.sectionCounter]].concat(newAnswer)
                    },
                    inputVal: action.selectedValue
               }

            } else if (state.answers[surveySection[state.sectionCounter]].some(answer => answer.id === state.questionId) 
            && state.answers[surveySection[state.sectionCounter]][state.counter].answer !== action.selectedValue) {
                newStateSelect = {
                    ...state,
                    inputVal: action.inputValue,
                    answers: {
                        ...state.answers,
                        [surveySection[state.sectionCounter]]: state.answers[surveySection[state.sectionCounter]].map((ans, i) => {
                            if (i === state.counter) {
                                return {...ans, answer: action.selectedValue}
                            } else {
                                return ans
                            }
                        })
                    }
                }
            } else {
                newStateSelect = {
                    ...state,
                    inputVal: action.selectedValue,
                }
            }
            return newStateSelect;
        case actionTypes.PREVIOUS_SECTION:
            return {
                ...state,
                sectionCounter: state.sectionCounter - 1,
                counter: surveyQuestions[surveySection[state.sectionCounter - 1]].length - 1,
                questionId: surveyQuestions[surveySection[state.sectionCounter - 1]].length
            }
        case actionTypes.RESET_QUESTIONS:
            return {
                ...state,
                counter: surveyQuestions[surveySection[state.sectionCounter - 1]].length - 1,
                questionId: surveyQuestions[surveySection[state.sectionCounter - 1]].length
            }
        case actionTypes.SAVE_USER_EMAIL:
            return {
                ...state,
                userInfo: {
                    ...state.userInfo,
                    email: action.userEmail
                }
            }
        case actionTypes.TO_NEXT_SECTION:
            console.log(action.userEmail);
            return {
                ...state,
                counter: 0,
                sectionCounter: state.sectionCounter + 1,
                questionId: 1,
            }
        case actionTypes.BROWSER_PREVIOUS_SECTION:
            return {
                ...state,
                counter: 0,
                questionId: 1,
                sectionCounter: state.sectionCounter - 1
            }
        default:
            return state;
    }
}

export default reducer;