import GlobalCSS from './styles/GlobalCSS';
import NavBar from './components/elements/NavBar';
import { Container } from './styles/GlobalStyledComponents';
import Header from './components/elements/Header';
import Main from './components/elements/Main';

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
