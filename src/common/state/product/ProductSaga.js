import { call, put } from 'redux-saga/effects';
import { path } from 'ramda';
import camelCaseKeys from 'camelcase-keys';
import ProductDuck from '~/common/state/product/ProductDuck';

//Example how use:
// export function* productRequest(api, { params }) {
// 	const response = yield call(path(['product', 'productEvents'], api), params);
// 	if (response.ok) {
// 		const data = camelCaseKeys(path(['data'], response), { deep: true });
// 		yield put(ProductDuck.productRequestSuccess(data));
// 	} else {
// 		const errors = (response.data && response.data.errors) || [];
// 		yield put(ProductDuck.productRequestFailure(response.status, errors));
// 	}
// }
