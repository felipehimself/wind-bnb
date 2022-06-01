import GlobalCSS from './styles/GlobalCSS';
import { Container } from './shared/GlobalStyledComponents';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

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
