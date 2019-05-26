import { call, put } from 'redux-saga/effects';
import { path } from 'ramda';
import camelCaseKeys from 'camelcase-keys';
import UserDuck from '~/user/state/UserDuck';

//Example how use:
// export function* userRequest(api, { params }) {
// 	const response = yield call(path(['user', 'userEvents'], api), params);
// 	if (response.ok) {
// 		const data = camelCaseKeys(path(['data'], response), { deep: true });
// 		yield put(UserDuck.userRequestSuccess(data));
// 	} else {
// 		const errors = (response.data && response.data.errors) || [];
// 		yield put(UserDuck.userRequestFailure(response.status, errors));
// 	}
// }
