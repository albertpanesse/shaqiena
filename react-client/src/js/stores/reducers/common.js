import * as actionTypes from '../actionTypes';

const initialState = {
	title: '',
	isLoading: null
};

function reducer(state = initialState, action) {
	switch (action.type) {
		case actionTypes.SET_TITLE:
			return {
				...state,
				title: action.payload
			};
		case actionTypes.SET_START_LOADING:
			return {
				...state,
				isLoading: action.payload
			};
		case actionTypes.SET_FINISH_LOADING:
			return {
				...state,
				isLoading: action.payload
			};
		default:
			return state;
	}
}


export default reducer;
