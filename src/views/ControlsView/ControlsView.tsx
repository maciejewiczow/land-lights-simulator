import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from 'store';
import { Wrapper } from './ControlsView.styles';
import lights from 'lights';
import { setCurrentLight } from 'store/Light/actions';
import { randomEntry } from 'utils/arrays';

export const ControlsView: React.FC = () => {
    const dispatch = useDispatch();
    const currentLight = useSelector((state: AppState) => state.currentLight);

    const updateLight = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const light = lights.find(({ name }) => name === e.target.value);

        if (light)
            dispatch(setCurrentLight(light));
    };

    const setRandomLight = () => {
        dispatch(setCurrentLight(randomEntry(lights)));
    };

    return (
        <Wrapper>
            <select value={currentLight.name} onChange={updateLight}>
                {lights.map(({ name }) => (
                    <option value={name}>{name}</option>
                ))}
            </select>
            <button type="button" onClick={setRandomLight}>Losuj</button>
            <br/>
            Okres: {currentLight.characteristic.map((num, i) => `${i % 2 === 0 ? 'światło' : 'przerwa'} ${(num / 1000).toFixed(2)}s`).join(', ')}
        </Wrapper>
    );
};

