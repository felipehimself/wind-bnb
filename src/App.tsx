import GlobalCSS from './styles/GlobalCSS';
import NavBar from './components/Navbar/NavBar';
import { Container } from './styles/GlobalStyledComponents';
import Header from './components/Header/Header';
import Main from './shared/Main';

const App: React.FC = () => {
  return (
    <>
      <Container>
        <GlobalCSS />
        <Header />
      </Container>
      <Container>
        <Main />
      </Container>
    </>
  );
};

export default App;
