import { breakpoints } from '../variables';

export const toRem = (px) => {
    return `${px / 16}rem`;
};
export const toEm = (px) => {
    return `${px / 16}em`;
};

export const breakpoint = ({ size, content }) => {
    return `@media (min-width: ${toEm(breakpoints[size])}){
        ${content}
    }`;
};

export function toDecimal(percent) {
    return parseFloat(percent) / 100;
}
