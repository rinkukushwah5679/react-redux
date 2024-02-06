import {configureStore} from '@reduxjs/toolkit';

import rootReducer from '../services/rootReducer';

const store = configureStore({
	reducer:rootReducer
});

export default store;