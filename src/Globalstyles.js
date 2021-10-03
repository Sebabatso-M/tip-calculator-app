import { createGlobalStyle } from 'styled-components';
import { toRem } from './Utils';
import { DollarIcon } from './assests';

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
    --form-input-size: ${toRem(24)};
}

body{
    background: var(--l-g-cyan);
    color: var(--d-g-cyan);
    font-family: var(--font);
    font-size: 16px;
    font-weight: 400;
}

.block{
    width: 50px;
    height: 50px;
    display: inline-block;
    margin: 0 10px;
}
.b1{
    background: var(--v-d-cyan);
}
.b2{
    background: var(--d-g-cyan);
}
.b3{
    background: var(--dd-g-cyan);
}
.b4{
    background: var(--l-g-cyan);
}
.b5{
    background: var(--ll-g-cyan);
}
.b6{
    background: var(--s-cyan);
}

`;
