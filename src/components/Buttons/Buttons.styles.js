import styled from 'styled-components';
import { toRem } from '../../Utils';

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
`;

export const TipButtonWrapper = styled(Button)`
    background: var(--v-d-cyan);
    display: inline-block;
    color: var(--white);

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
`;
