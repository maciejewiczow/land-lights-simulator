import { Light } from 'models/Light';
import styled from 'styled-components';
import { sum } from 'utils/arrays';

export const Wrapper = styled.div`
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

export const SvgWrapper = styled.svg`
    width: 30px;
    height: 30px;
`;

export const OpenControlsButton = styled.button`
    position: absolute;
    top: 16px;
    left: 16px;
`;

const generateKeyframes = ({ characteristic }: Pick<Light, 'characteristic'>) => {
    const period = characteristic.reduce(sum, 0);

    const arr = [0, ...characteristic];

    let total = 0;
    return arr.map((num, i) => {
        const result = `
            ${((total + num) / period) * 100}% {
                fill: ${i % 2 === 0 ? 'white' : 'black'}
            }
        `;
        total += num;
        return result;
    }).join('\n');
};

const generateKeyframesName = ({ characteristic }: Pick<Light, 'characteristic'>) => 'blink_' + characteristic.join('_');

export const Lantern = styled.circle<Pick<Light, 'characteristic'>>`
    animation-name: ${generateKeyframesName};
    animation-duration: ${({ characteristic }) => characteristic.reduce(sum, 0)}ms;
    animation-iteration-count: infinite;
    animation-timing-function: step-end;

    @keyframes ${generateKeyframesName} {
        ${generateKeyframes}
    }
`;
