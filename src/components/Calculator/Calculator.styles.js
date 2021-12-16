import styled from 'styled-components';
import { toRem } from '../../Utils';

export const Wrapper = styled.div`
    --curve: ${toRem(18)};

    padding: var(--m-mb) ${toRem(32)};

    background: var(--white);
    border-radius: var(--curve) var(--curve) 0 0;
`;

export const ButtonsWrapper = styled.div`
    display: flex;

    flex-wrap: wrap;
    justify-content: space-between;

    max-width: ${toRem(386)};

    margin-bottom: var(--m-mb);
`;
