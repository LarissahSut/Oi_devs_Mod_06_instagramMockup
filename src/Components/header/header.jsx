import React from "react";
import { InstaContext } from '../../App';
import { Button } from '../../ui/Button';
import { Text, TextLink } from '../../ui/Text';
import { Avatar } from '../avatar';
import * as S from './styles';

export const Header = () => {
  const state = React.useContext(InstaContext)
  console.log(state)

  return (
    <S.HeaderWrapper>
      <S.AvatarWrapper>
        <Avatar imagePath="https://via.placeholder.com/150" />
      </S.AvatarWrapper>
      <S.Content>
        <S.Data>
          <Text bold>{state.meuState.user.username}</Text>
          <Button>Seguindo</Button>
          <Button>Enviar mensagem</Button>
        </S.Data>
        <S.Data>
          <Text>211 publicações</Text>
          <Text>44,2 mil seguidores</Text>
          <Text>2 seguindo</Text>
        </S.Data>
        <S.Infos>
          <Text>Ada Tech</Text>
          <Text color="#a8a8a8" bold>
            Educação
          </Text>
          <TextLink href="https://google.com.br" target="_blank">
            Ada. A nova Educação
          </TextLink>
          <S.Followers>
            <Text size="small">Seguido(a) por lorem, ipsum, dolorsitamet</Text>
          </S.Followers>
        </S.Infos>
      </S.Content>
    </S.HeaderWrapper>
  );
};
