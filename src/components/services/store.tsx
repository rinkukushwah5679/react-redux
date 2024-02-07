import {configureStore} from '@reduxjs/toolkit';
import rootReducer from '../services/rootReducer';
import createSagaMiddleware from 'redux-saga';
import SagaData from '../services/useSaga'
const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
	reducer:rootReducer,
	middleware:()=>[sagaMiddleware],
});

sagaMiddleware.run(SagaData)

export default store;