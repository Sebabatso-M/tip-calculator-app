import { createGlobalStyle } from 'styled-components';
import { toRem, breakpoint } from './Utils';

export const GlobalStyle = createGlobalStyle`

*{
    margin:0;
    padding:0;
    box-sizing: border-box;
}

:root{

    /* colors */
    --s-cyan: hsl(172, 67%, 45%);
    --v-d-cyan:hsl(183, 100%, 15%);
    --d-g-cyan:hsl(186, 14%, 43%);
    --dd-g-cyan:hsl(184, 14%, 56%);
    --l-g-cyan:hsl(185, 41%, 84%);
    --ll-g-cyan:hsl(189, 41%, 97%);
    --white:hsl(0, 0%, 100%);

    /* font */
    --font: 'Space Mono', monospace;

    /* font size */
    --input-size: ${toRem(16)};

    /* title spacing */
    --spacing-size: ${toRem(50)};

    ${breakpoint({
        size: 'mobile_s',
        content: `
        --input-size: ${toRem(20)};
    `,
    })}

    /* margins */

    /* medium margin bottom */
    --m-mb: ${toRem(36)};

    ${breakpoint({
        size: 'mobile_s',
        content: `
        --m-mb: ${toRem(40)}
    `,
    })}
}

body{
    background: var(--l-g-cyan);
    color: var(--d-g-cyan);
    font-family: var(--font);
    font-size: 16px;
    font-weight: 400;
    padding-top: var(--spacing-size);
}

.selected{
    color: var(--v-d-cyan);
    background: var(--s-cyan);
}
`;
