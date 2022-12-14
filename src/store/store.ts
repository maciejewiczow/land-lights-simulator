import { applyMiddleware, compose, createStore } from 'redux';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import { Config, createStateSyncMiddleware, initStateWithPrevTab } from 'redux-state-sync';
import createRootReducer from './reducers';
import { LightActionType } from './Light/constants';

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const config: Config = {
    // predicate: action => !(action.type as string).startsWith('@@router'),
    whitelist: [LightActionType.SetCurrentLight],
    prepareState: ({ router, ...state }) => state,
};

export const history = createBrowserHistory({ basename: '/land-lights-simulator' });

export const store = createStore(
    createRootReducer(history),
    composeEnhancers(
        applyMiddleware(
            routerMiddleware(history),
            createStateSyncMiddleware(config)
        ),
    ),
);

initStateWithPrevTab(store);
