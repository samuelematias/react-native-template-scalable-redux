import { combineReducers } from 'redux';

const reducers = combineReducers({
	//Example how use:
	// product: require('~/common/state/product/ProductDuck').reducer,
	// user: require('~/user/state/UserDuck').reducer,

	// Remova essa linha depois de adicionar seus ducks
	example: () => [],
});

export default reducers;
