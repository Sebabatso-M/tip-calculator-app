import styled from 'styled-components';
import { toRem } from '../../Utils';

export const Wrapper = styled.h2`
    font-size: ${toRem(19)};
    color: var(--d-g-cyan);

    margin-bottom: ${(props) => (props.mb ? toRem(props.mb) : toRem(12))};
`;
