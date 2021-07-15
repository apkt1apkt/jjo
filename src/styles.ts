const getCSSVariable = (name: string) => getComputedStyle(document.documentElement).getPropertyValue(`--${name}`);

export const primaryColor = getCSSVariable("primary");

export const grayColor = getCSSVariable("gray");

export const lightGrayColor = getCSSVariable("lightGray");
