import { takeEvery, put } from 'redux-saga/effects'
import {USER_LIST, SET_USER_DATA} from '../services/constants'
import { BASE_URL } from '../../config';

function* userList(){
	const url = `${BASE_URL}/posts`
	// console.warn(url)
	const result = yield fetch(url);
	const data = yield result.json();
	// console.warn(data);
	yield put({type:SET_USER_DATA, data})
}


function* SagaData(){
	yield takeEvery(USER_LIST,userList)
}

export default SagaData;