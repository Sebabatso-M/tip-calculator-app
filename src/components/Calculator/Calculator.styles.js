import styled from 'styled-components';
import { toRem, breakpoint } from '../../Utils';

export const Wrapper = styled.div`
    padding: var(--m-mb) ${toRem(32)};
    padding-bottom: 0;
    max-width: ${toRem(631)};
    margin: 0 auto;

    ${breakpoint({
        size: `mobile_m`,
        content: `

        padding: var(--m-mb);
    `,
    })};

    ${breakpoint({
        size: `laptop_s`,
        content: `
        padding:0;
        padding-right: var(--m-mb);
    `,
    })};
`;

export const ButtonsWrapper = styled.div`
    display: flex;

    flex-wrap: wrap;
    /* justify-content: space-between; */
    justify-content: space-around;

    /* max-width: ${toRem(308)}; */

    margin-bottom: var(--m-mb);
`;
