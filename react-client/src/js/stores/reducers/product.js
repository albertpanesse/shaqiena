import * as actionTypes from '../actionTypes';

const initialState = {featured: []};

function reducer(state = initialState, action) {
	switch (action.type) {
		case actionTypes.SET_FEATURED_SUCCESS:
			return {
				...state,
				featured: action.payload
			};
		default:
			return state;
	}
}


export default reducer;
