import styled from 'styled-components';
import { toRem, breakpoint } from '../../Utils';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: var(--spacing-size);
`;

export const Text = styled.p`
    color: var(--v-d-cyan);
    font-weight: 700;
    font-size: ${toRem(24)};
    letter-spacing: ${toRem(8)};
    text-transform: uppercase;

    ${breakpoint({
        size: 'tablet',
        content: `
            font-size: ${toRem(30)};
            letter-spacing: ${toRem(10)};
        `,
    })}
`;
