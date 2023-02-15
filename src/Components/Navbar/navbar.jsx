import { Title } from '../title';
import { NavItem } from '../nav-item';
import * as S from './styles';

const items = [
  'Página Inicial',
  'Pesquisa',
  'Explorar',
  'Reels',
  'Mensagens',
  'Notificações',
  'Criar',
  'Perfil',
];

export const Navbar = (props) => {
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
      <NavItem text={'Mais'} />
    </S.NavBarWrapper>
  );
};
