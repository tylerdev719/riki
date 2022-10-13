// Store JS
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import { reducer as authReducer } from './auth';

const reducer = combineReducers({
	auth: authReducer,
});

export default configureStore({
	reducer,
});
