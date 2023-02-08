import { Navbar } from './Components/navbar';
import { Title } from './Components/title';
import { NavItem } from './Components/nav-item';
import { Header } from './Components/header';
import { Avatar } from './Components/avatar';
import { Text } from './Components/text';
import { Button } from './Components/button';

const items = [
  'Página Inicial',
  'Pesquisa',
  'Explorar',
  'Reels',
  'Mensagens',
  'Notificações',
  'Criar',
  'Perfil',
  'Mais',
];

function App() {
  return (
    <>
      <Navbar>
        <Title />
        {items.map((item) => (
          <NavItem key={item} text={item} />
        ))}
      </Navbar>
      <Header>
        <Avatar />
        <Text bold={true}> @adatech </Text>
        <Button>Seguindo</Button>
        <Button>Enviar mensagem</Button>
        <Text>211 publicações</Text>
        <Text>44,2 mil seguidores</Text>
        <Text>2 seguindo</Text>
      </Header>
    </>
  );
}

export default App;
