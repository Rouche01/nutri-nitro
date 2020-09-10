import {
    ANSWER_SURVEY
} from '../actionTypes';

export const answerTextResponse = (inputVal) => (dispatch) => {
    console.log('works')
    dispatch({ type: ANSWER_SURVEY, payload: inputVal})
}