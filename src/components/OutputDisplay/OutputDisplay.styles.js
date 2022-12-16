import styled from 'styled-components';
import { toRem, breakpoint } from '../../Utils';
import { DollarIcon2 } from '../../assests';

export const Wrapper = styled.div`
    --curve: ${toRem(18)};

    background: var(--v-d-cyan);
    border-radius: var(--curve);

    width: 88%;
    max-width: ${toRem(590)};
    margin: 0 auto;

    padding: ${toRem(42)} ${toRem(24)};
    /* padding-bottom: ${toRem(23)}; */

    position: relative;

    ${breakpoint({
        size: 'laptop_s',
        content: `
            width: 65%;
            max-width: ${toRem(388)}
        `,
    })}
`;

export const OutputWrapper = styled.div`
    display: flex;
    justify-content: space-between;

    margin-bottom: ${toRem(32)};
    ${breakpoint({
        size: 'mobile_l',
        content: `
            margin-bottom: ${toRem(38)};
        `,
    })}
    ${breakpoint({
        size: 'laptop_s',
        content: `
            margin-bottom: ${toRem(50)};
        `,
    })}
`;

export const OutputValueWrapper = styled.div`
    display: flex;

    align-items: center;
    color: var(--s-cyan);
    font-size: ${toRem(32)};
    font-weight: 700;

    ${breakpoint({
        size: 'mobile_m',
        content: `
            font-size:${toRem(36)};
        `,
    })}
    ${breakpoint({
        size: 'mobile_l',
        content: `
            font-size:${toRem(40)};
        `,
    })}
    ${breakpoint({
        size: 'mobile_ls',
        content: `
            font-size:${toRem(44)};
        `,
    })}
    ${breakpoint({
        size: 'tablet',
        content: `
            font-size:${toRem(48)};
            margin-top: ${toRem(-15)}
        `,
    })}
`;

export const FirstDisplayTitlesWrapper = styled.div`
    color: var(--white);
    margin-bottom: ${toRem(5)};
    font-weight: 700;
`;

export const SecondDisplayTitlesWrapper = styled.div`
    color: var(--d-g-cyan);
    font-weight: 700;
`;

export const Icon = styled.div`
    height: ${toRem(22)};
    width: ${toRem(22)};

    display: inline-block;
    background: url(${DollarIcon2});
    background-repeat: no-repeat;
    background-size: contain;
    background-position-x: right;

    color: red;

    margin-top: ${toRem(-4.3)};
`;
