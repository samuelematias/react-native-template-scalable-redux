import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
	//Example how use:
	// userRequest: ['params'],
	// userRequestSuccess: ['user'],
	// userRequestFailure: ['requestProductResponseCode', 'requestProductErrors'],
});

export const userTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
	//Example how use:
	// user: [],
	// userRequesting: false,
	// userRequestingSuccess: false,
	// userRequestResponseCode: null,
	// userRequestErrors: [],
});

/* ------------- Reducers ------------- */

//Example how use:
// export const userRequest = state => state.merge({ userRequesting: true });

// export const userRequestSuccess = (state, { user }) =>
// 	state.merge({
// 		userRequesting: false,
// 		userRequestResponseCode: null,
// 		userRequestErrors: [],
// 		userRequestingSuccess: true,
// 		user,
// 	});

// export const userRequestFailure = (
// 	state,
// 	{ userRequestResponseCode, userRequestErrors },
// ) =>
// 	state.merge({
// 		userRequesting: false,
// 		userRequestingSuccess: false,
// 		userRequestResponseCode,
// 		userRequestErrors,
// 	});

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
	//Example how use:
	// [Types.USER_REQUEST]: userRequest,
	// [Types.USER_REQUEST_SUCCESS]: userRequestSuccess,
	// [Types.USER_REQUEST_FAILURE]: userRequestFailure,
});
