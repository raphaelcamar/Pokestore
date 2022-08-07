export type FontProps = {
  primary: string;
  secondary: string;
};

export type ColorProps = {
  secondary: string;
  main: string;
  light: string;
  font: FontProps;
  background: string;
};

export namespace Theme {
  export type Base = {
    secondary: string;
    main: string;
    light: string;
    font: FontProps;
    background: string;
    title: string;
  };
}

declare module 'styled-components' {
  export type DefaultTheme = Theme.Base;
}
