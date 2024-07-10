import "styled-components";
declare module "styled-componentes" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      btnPrimary: string;
      text: string;
      gray1: string;
      gray3: string;
      gray4: string;
      gray5: string;
      gray6: string;
      gray7: string;
      gray8: string;
    };
    fonts: {
      default: string;
    };
    fontSizes: {
      small: string; //rem
      medium: string;
      large: string;
    };
    icons: {
      main: string; //logo principal
      iconInitialPage: {
        selected: string;
        default: string;
      };
      iconExplore: {
        selected: string;
        default: string;
      };
      iconProfile: {
        selected: string;
        default: string;
      };
      iconLike: {
        default: string; //cinza
        selected: string; //curtido
      };
      iconReply: string;
      arrowIcon: string;
    };
  }
}
