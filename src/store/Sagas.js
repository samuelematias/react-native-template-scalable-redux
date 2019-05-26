import { takeLatest, all } from 'redux-saga/effects';

/* ------------- Types ------------- */

//Example how use:
// import { productTypes } from '~/common/state/product/ProductDuck';
// import { userTypes } from '~/user/state/UserDuck';

/* ------------- Sagas ------------- */

//Example how use:
// import { productRequest } from '~/common/state/product/ProductSaga';
// import { userRequest } from '~/user/state/UserSaga';

/* ------------- Connect Types To Sagas ------------- */

export default function* rootSaga() {
	yield all([
		//Example how use:
		// takeLatest(productTypes.PRODUCT_REQUEST, productRequest),
		// takeLatest(userTypes.USER_REQUEST, userRequest),
	]);
}
