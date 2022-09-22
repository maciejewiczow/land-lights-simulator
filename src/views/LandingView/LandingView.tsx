import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { AppState } from 'store';
import { Lantern, SvgWrapper, Wrapper } from './parts';

export const LandingView: React.FC = () => {
    const currentLight = useSelector((state: AppState) => state.currentLight);
    const location = useLocation();

    useEffect(() => {
        window.open(
            `${location.pathname !== '/' ? location.pathname : ''}/controls`,
            'controls',
            'height=100,width=300,fullscreen=yes,toolbar=no,menubar=no,scrollbars=no,resizable=yes,location=no,directories=no,status=no',
        );
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Wrapper>
            <SvgWrapper viewBox="0 0 100 100">
                <Lantern characteristic={currentLight.characteristic} fill="white" cx="50" cy="50" r="50" />
            </SvgWrapper>
        </Wrapper>
    );
};
