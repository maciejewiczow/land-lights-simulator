import { Light } from 'models/Light';
import { PickAction } from 'store/utils';
import { LightAction, LightActionType } from './constants';

export const setCurrentLight = (light: Light): PickAction<LightAction, LightActionType.SetCurrentLight> => ({
    type: LightActionType.SetCurrentLight,
    light,
});
