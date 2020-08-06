import {combineReducers} from 'redux';

import commonReducer from './common';
import departmentReducer from './department';
import productReducer from './product';

const rootReducer = combineReducers({
	commonReducer,
	departmentReducer,
	productReducer
});

export default rootReducer;
