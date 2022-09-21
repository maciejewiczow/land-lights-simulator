import { combineReducers } from 'redux';
import { History } from 'history';
import { connectRouter } from 'connected-react-router';
import { AppState } from './constants';
import { lightReducer } from './Light/reducers';
import { withReduxStateSync } from 'redux-state-sync';

const createRootReducer = (history: History) => withReduxStateSync(
    combineReducers<AppState>({
        router: connectRouter(history),
        currentLight: lightReducer,
    })
);

export default createRootReducer;
