import styled from 'styled-components';
import { toRem } from '../../Utils';
import { DollarIcon2 } from '../../assests';

export const Wrapper = styled.div`
    --curve: ${toRem(18)};

    background: var(--v-d-cyan);
    border-radius: var(--curve);

    margin: 0 ${toRem(25)};
    padding: ${toRem(42)} ${toRem(24)};
    padding-bottom: ${toRem(23)};
`;

export const OutputWrapper = styled.div`
    display: flex;
    justify-content: space-between;

    margin-bottom: ${toRem(32)};
`;

export const OutputValueWrapper = styled.div`
    display: flex;

    align-items: center;
    color: var(--s-cyan);
    font-size: ${toRem(32)};
    font-weight: 700;
`;

export const FirstDisplayTitlesWrapper = styled.div`
    color: var(--white);
    margin-bottom: ${toRem(5)};
    font-weight: 700;
`;

export const SecondDisplayTitlesWrapper = styled.div`
    color: var(--d-g-cyan);
    font-weight: 700;
`;

export const Icon = styled.div`
    height: ${toRem(22)};
    width: ${toRem(22)};

    display: inline-block;
    background: url(${DollarIcon2});
    background-repeat: no-repeat;
    background-size: contain;
    background-position-x: right;

    color: red;

    margin-top: ${toRem(-4.3)};
`;
