import GlobalCSS from './styles/GlobalCSS';
import NavBar from './components/elements/NavBar';
import { Container } from './styles/GlobalStyledComponents';
import Header from './components/elements/Header';

const App:React.FC = () => {
  return (
    <Container>
      <GlobalCSS />
      <Header />
    </Container>
  );
};

export default App;
