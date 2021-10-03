import styled from 'styled-components';
import { toRem } from '../../Utils';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Text = styled.p`
    color: var(--d-g-cyan);
    font-weight: 700;
    font-size: ${toRem(24)};
    letter-spacing: ${toRem(8)};
    text-transform: uppercase;
`;
