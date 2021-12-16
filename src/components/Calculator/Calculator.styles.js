import styled from 'styled-components';
import { toRem } from '../../Utils';

export const Wrapper = styled.div`
    padding: var(--m-mb) ${toRem(32)};
    padding-bottom: 0;
`;

export const ButtonsWrapper = styled.div`
    display: flex;

    flex-wrap: wrap;
    justify-content: space-between;

    max-width: ${toRem(386)};

    margin-bottom: var(--m-mb);
`;
