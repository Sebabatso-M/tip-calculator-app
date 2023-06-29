import styled from 'styled-components';
import { toRem, breakpoint } from '../../Utils';

export const Button = styled.button`
    border: none;
    border-radius: ${toRem(6)};
    background: none;
    transition: all 0.1s;

    padding: ${toRem(14)} ${toRem(27)};

    font-size: var(--input-size);
    font-weight: 700;
    text-align: center;

    max-width: ${toRem(148)};
    width: 48%;

    ${breakpoint({
        size: 'laptop_s',
        content: `
            width: 30%;
        `,
    })}
`;

export const TipButtonWrapper = styled(Button)`
    background: ${(props) =>
        props.active && !props.removeActive
            ? 'var(--s-cyan)'
            : 'var(--v-d-cyan)'};
    display: inline-block;
    color: ${(props) =>
        props.active && !props.removeActive
            ? 'var(--v-d-cyan)'
            : ' var(--white)'};

    margin-bottom: ${toRem(16)};

    cursor: pointer;

    &:hover {
        color: var(--v-d-cyan);
        background: var(--s-cyan);
    }
`;

export const ResetButtonWrapper = styled(Button)`
    background: var(--s-cyan);
    color: var(--v-d-cyan);

    width: 100%;
    max-width: unset;

    ${breakpoint({
        size: 'laptop_s',
        content: `
            position absolute;
            left:${toRem(0)};
            right:${toRem(0)};
            bottom:${toRem(42)};
            margin: 0 auto;
            width:88%;
        `,
    })}
`;
