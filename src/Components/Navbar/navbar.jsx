import { Title } from "../title";
import { NavItem } from "../nav-item";
import * as S from "./styles";
import { InstaContext } from "../../App";
import React, { createContext } from "react";

const items = [
  "Página Inicial",
  "Pesquisa",
  "Explorar",
  "Reels",
  "Mensagens",
  "Notificações",
  "Criar",
  "Perfil",
];

export const Navbar = () => {
  const {meuState, meuDispatch} = React.useContext(InstaContext);

  const onClickLoginButtonHandler = () => {
    meuDispatch({ type: "change_current_page", payload: "login" });
  };
  return (
    <S.NavBarWrapper>
      <S.Box>
        <S.Box>
          <Title />
        </S.Box>
        <S.Box>
          {items.map((item) => (
            <NavItem key={item} text={item} />
          ))}
        </S.Box>
      </S.Box>
      <NavItem onClick={onClickLoginButtonHandler} text={"Ir para o login"} />
      <NavItem text={"Mais"} />
    </S.NavBarWrapper>
  );
};
