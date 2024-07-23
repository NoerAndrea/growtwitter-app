import { useTheme } from "styled-components";
import { ContainerPages } from "../components/styled-components/ContainerPages";
import { Nav } from "../components/styled-components/Nav";
import { Button } from "../components/styled-components/Button";
import { ProfileAvatar } from "../components/styled-components/ProfileAvatar";
import { ProfileAvatarImg } from "../components/styled-components/ProfileAvatarImg";
import { ContainerPagesContents } from "../components/styled-components/ContainerPagesContent";
import { Aside } from "../components/styled-components/Aside";
import { AsideCard } from "../components/styled-components/AsideCard";
import { Logo } from "../components/styled-components/Logo";
import { NavSideMenu } from "../components/styled-components/NavSideMenu";
import { ProfileAvatarImgContainer } from "../components/styled-components/ProfileAvatarImgContainer";
import { ProfileName } from "../components/styled-components/PofileName";
import { AsideLink } from "../components/styled-components/AsideLink";
import { NavOut } from "../components/styled-components/NavOut";

import { outLogin } from "../configs/services/growtwetter-api/auth.service";
import { useNavigate } from "react-router-dom";
import { Main } from "../components/functional-components/ListAllTweets";

export function Feed() {
  const navigate = useNavigate();

  async function handleOut(event: React.MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();
    const token = localStorage.getItem("authToken");
    if (token) {
      const response = await outLogin(JSON.parse(token));
      if (response.ok) {
        localStorage.removeItem("authToken");
        navigate("/");
      }
    }
  }

  const theme = useTheme();

  return (
    <>
      <ContainerPages>
        <ContainerPagesContents>
          <Nav>
            <NavSideMenu>
              <Logo>
                <img src={theme.icons.main} alt="Logo" />
              </Logo>
              <ul>
                <li>
                  <a href="/feed">
                    <img
                      src={theme.icons.iconInitialPage.default}
                      alt="Página Inicial Icon"
                    />
                    <span>Página Inicial</span>
                  </a>
                </li>
                <li>
                  <a href="/explorar">
                    <img
                      src={theme.icons.iconExplore.default}
                      alt="Explorar Icon"
                    />
                    <span>Explorar</span>
                  </a>
                </li>
                <li>
                  <a href="/profile">
                    <img
                      src={theme.icons.iconProfile.default}
                      alt="Perfil Icon"
                    />
                    <span>Perfil</span>
                  </a>
                </li>
              </ul>
              <Button>Tweetar</Button>
            </NavSideMenu>
            <div>
              <ProfileAvatar>
                <ProfileAvatarImgContainer>
                  <ProfileAvatarImg src={theme.images.avatar} alt="Avatar" />
                </ProfileAvatarImgContainer>
                <ProfileName>
                  <h1>Growdev</h1>
                  <p>@growdev</p>
                </ProfileName>
              </ProfileAvatar>
              <NavOut>
                <a href="/login" onClick={handleOut}>
                  Sair
                </a>
              </NavOut>
            </div>
          </Nav>
          <Main></Main>
          <Aside>
            <AsideCard>
              <h1>O que está acontecendo?</h1>
              <ul>
                <li>
                  <label>Esportes - Há 45 min</label>
                  <p>Assunto sobre esportes</p>
                </li>
                <li>
                  <label>Assunto do Momento em Brasil</label>
                  <p>Assunto do Momento</p>
                </li>
                <li>
                  <label>Música - Assunto do Momento</label>
                  <p>Assunto sobre Música</p>
                </li>
                <li>
                  <label>Cinema - Assunto do Momento</label>
                  <p>Assunto sobre Filmes e Cinema</p>
                </li>
              </ul>
              <AsideLink>
                <a href="/explore">Mostrar mais</a>
              </AsideLink>
            </AsideCard>
          </Aside>
        </ContainerPagesContents>
      </ContainerPages>
    </>
  );
}
