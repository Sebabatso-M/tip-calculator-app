import styled from 'styled-components';
import { toRem, breakpoint } from '../../Utils';

export const Wrapper = styled.div`
    position: relative;
    margin-bottom: var(--m-mb);
`;

export const Input = styled.input`
    padding: ${toRem(15)} ${toRem(21.5)};
    padding-left: ${toRem(48)};

    --curve: ${toRem(8)};
    --max-width: ${toRem(311)};

    color: var(--v-d-cyan);
    background: var(--ll-g-cyan);
    border: none;
    border-radius: var(--curve);
    text-align: right;
    font-size: var(--input-size);
    font-weight: 700;

    width: 100%;
    /* max-width: var(--max-width); */

    /* Chrome, Safari, Edge, Opera */
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    /* Firefox */
    &[type='number'] {
        -moz-appearance: textfield;
    }

    &:focus {
        outline: ${toRem(2)} solid var(--s-cyan);
    }
`;

export const CustomInputWrapper = styled(Input)`
    max-width: ${toRem(148)};
    width: 48%;

    padding: ${toRem(14)} ${toRem(20)};
    margin-bottom: ${toRem(16)};

    ${breakpoint({
        size: 'mobile_m',
        content: `
        padding: ${toRem(14)} ${toRem(27)};
    `,
    })}

    ${breakpoint({
        size: 'laptop_s',
        content: `
            width: 30%;
            font-size: ${toRem(18)}
        `,
    })}
`;

export const Icon = styled.div`
    height: ${toRem(18)};
    width: ${toRem(18)};

    background: url(${(props) => props.icon && props.icon});
    background-repeat: no-repeat;
    background-size: contain;

    position: absolute;
    top: ${toRem(14)};
    left: ${toRem(20)};

    ${breakpoint({
        size: 'mobile_s',
        content: `
        top: ${toRem(18)};
    `,
    })}
`;
