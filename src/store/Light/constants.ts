import { Light } from 'models/Light';

export enum LightActionType {
    SetCurrentLight = 'light/setCurrent',
}

export type LightAction = {
    type: LightActionType.SetCurrentLight;
    light: Light;
};

