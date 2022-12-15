import styled from 'styled-components';
import { toRem, toEm } from '../../Utils';

export const Wrapper = styled.h2`
    font-size: ${toRem(19)};
    color: var(--d-g-cyan);

    margin-bottom: ${(props) => (props.mb ? toRem(props.mb) : toRem(12))};

    @media (min-width: ${toEm(320)}) {
        margin-bottom: ${(props) =>
            props.mb ? toRem(parseFloat(props.mb) + 12) : toRem(24)};
    }
`;
