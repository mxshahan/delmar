import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import AuthReducer from '../Reducers/Auth';
import UserReducer from '../Reducers/User';
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        combineReducers({
          auth: AuthReducer,
          user: UserReducer
        }),
        composeEnhancer(applyMiddleware(thunk))
    );
    return store;
}
