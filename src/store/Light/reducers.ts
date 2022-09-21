import { Reducer } from 'redux';
import { LightAction, LightActionType } from './constants';
import { initialLightState, LightState } from './store';

export const lightReducer: Reducer<LightState, LightAction> = (
    // eslint-disable-next-line @typescript-eslint/default-param-last
    state = initialLightState,
    action
) => {
    switch (action.type) {
        case LightActionType.SetCurrentLight:
            return {
                ...state,
                ...action.light,
            };
        default:
            return state;
    }
};
