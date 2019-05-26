import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
	//Example how use:
	// productRequest: ['params'],
	// productRequestSuccess: ['product'],
	// productRequestFailure: ['requestProductResponseCode', 'requestProductErrors'],
});

export const productTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
	//Example how use:
	// product: [],
	// productRequesting: false,
	// productRequestingSuccess: false,
	// productRequestResponseCode: null,
	// productRequestErrors: [],
});

/* ------------- Reducers ------------- */

//Example how use:
// export const productRequest = state => state.merge({ productRequesting: true });

// export const productRequestSuccess = (state, { product }) =>
// 	state.merge({
// 		productRequesting: false,
// 		productRequestResponseCode: null,
// 		productRequestErrors: [],
// 		productRequestingSuccess: true,
// 		product,
// 	});

// export const productRequestFailure = (
// 	state,
// 	{ productRequestResponseCode, productRequestErrors },
// ) =>
// 	state.merge({
// 		productRequesting: false,
// 		productRequestingSuccess: false,
// 		productRequestResponseCode,
// 		productRequestErrors,
// 	});

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
	//Example how use:
	// [Types.PRODUCT_REQUEST]: productRequest,
	// [Types.PRODUCT_REQUEST_SUCCESS]: productRequestSuccess,
	// [Types.PRODUCT_REQUEST_FAILURE]: productRequestFailure,
});
