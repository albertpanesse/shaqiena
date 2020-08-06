import * as actionTypes from '../actionTypes';

const initialState = {
	departments: [],
	isLoading: null
};

function reducer(state = initialState, action) {
	switch (action.type) {
		case actionTypes.SET_DEPARTMENTS_SUCCESS:
			return {
				...state,
				departments: action.payload
			};
		default:
			return state;
	}
}


export default reducer;
