import {combineEpics, ofType} from 'redux-observable';
import {map, flatMap} from 'rxjs/operators';
import {ajax} from 'rxjs/ajax';

import * as actions from '../actionTypes';

const getDepartments = action$ => action$.pipe(
	ofType(actions.GET_DEPARTMENTS),
	flatMap(() => ajax({
		url: `${process.env.API_URL}/department/get/all`,
		method: 'GET'
	})),
	map((result) => {
		if (!result.response.success) {
			return {type: actions.SET_DEPARTMENTS_FAILED};
		}

		return {
			type: actions.SET_DEPARTMENTS_SUCCESS,
			payload: result.response.departments
		};
	})
);

const getFeatured = action$ => action$.pipe(
	ofType(actions.GET_FEATURED),
	flatMap(() => ajax({
		url: `${process.env.API_URL}/product/get/featured`,
		method: 'GET'
	})),
	map((result) => {
		if (!result.response.success) {
			return {type: actions.SET_FEATURED_FAILED};
		}

		return {
			type: actions.SET_FEATURED_SUCCESS,
			payload: result.response.featured
		};
	})
);

const rootEpic = combineEpics(getDepartments, getFeatured);

export default rootEpic;
