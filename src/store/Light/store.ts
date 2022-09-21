import { Light } from 'models/Light';
import swinoujscie from 'lights/świnoujście.json';

export type LightState = Light;

export const initialLightState: LightState = swinoujscie;
