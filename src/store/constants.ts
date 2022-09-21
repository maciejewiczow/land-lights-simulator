import { RouterState } from 'connected-react-router';
import { LightState } from './Light/store';

export interface AppState {
    router: RouterState;
    currentLight: LightState;
}
