import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { AppState } from 'store';
import { Lantern, OpenControlsButton, SvgWrapper, Wrapper } from './parts';

export const LandingView: React.FC = () => {
    const currentLight = useSelector((state: AppState) => state.currentLight);

    const openControls = () => {
        const pathname = window.location.pathname.slice(0, -1);
        window.open(
            `${pathname}/controls`,
            'controls',
            'height=100,width=300,toolbar=no,menubar=no,scrollbars=no,resizable=yes,location=no,directories=no,status=no',
        );
    };

    useEffect(() => {
        openControls();
    }, []);

    return (
        <Wrapper>
            <OpenControlsButton type="button" onClick={openControls}>Open controls</OpenControlsButton>
            <SvgWrapper viewBox="0 0 100 100">
                <Lantern characteristic={currentLight.characteristic} fill="white" cx="50" cy="50" r="50" />
            </SvgWrapper>
        </Wrapper>
    );
};
