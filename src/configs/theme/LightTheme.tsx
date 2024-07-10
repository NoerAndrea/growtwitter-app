import { DefaultTheme } from "styled-components";

import iconLikeDefault from '../../assets/light_color/icone_curtir.svg';
import iconExploreDefault from '../../assets/light_color/icone_explorar.svg';
import iconExploreSelected from '../../assets/light_color/icone_explorar_selecionado.svg';
import iconProfileDefault from '../../assets/light_color/icone_perfil.svg';
import iconProfileSelected from '../../assets/light_color/icone_perfil_selecionado.svg';
import iconReply from '../../assets/light_color/icone_responder.svg';
import arrowIcon from '../../assets/light_color/icone_seta.svg';
import iconInitialDefault from '../../assets/light_color/icone_pagina inicial.svg';
import iconInitialSelected from '../../assets/light_color/icone_pagina inicial_selecionado.svg';
import iconMain from '../../assets/light_color/logo_growtweet.svg';
import { ThemeProvider } from "styled-components";
import closeIcon from '../../assets/light_color/X.svg';



const lihgtTheme: DefaultTheme={
    colors:{
        primary: "#1D9BF0",
        secondary: "#AFDBD2",
        btnPrimary:"1D9BF0",
        text:"#FFFF",
        gray1:"#333333",
        gray2:"#4F4F4F",
        gray3:"#828282",
        gray4:"#c3c3c3",
        gray5:"#E0E0E0",
        gray6:"#E9E9E9",
        gray7:"#F2F2F2",
        gray8:"#fcfcfcde",
    },
    fonts:{
        default: "Karla, Roboto, sans-serif"
    },
    fintSize:{
        small: "1rem",
        medium: "2rem",
        large: "3rem"
    },
    icons:{
        main: iconMain,

        iconInitialPage: {
        selected: iconInitialSelected,
        default: iconInitialDefault,
      },
      iconExplore: {
        selected: iconExploreDefault,
        default: iconExploreSelected,
      },
      iconProfile: {
        selected: iconProfileSelected,
        default: iconProfileDefault,
      },
      iconLike: {
        default: iconLikeDefault, //cinza
        selected: "", //curtido
      },
      iconReply: iconReply,
      arrowIcon: arrowIcon,
      closeIcon: closeIcon,
    }
}

interface LightThemeProps {
    children: React.ReactNode;
}

export function LightTheme(props: LightThemeProps){
    return(
        <ThemeProvider theme={lihgtTheme}>
            {props.children}
        </ThemeProvider>
    )
}