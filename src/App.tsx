import GlobalCSS from './styles/GlobalCSS';
import NavBar from './components/elements/NavBar';
import { Container } from './styles/GlobalStyledComponents';

const App:React.FC = () => {
  return (
    <Container>
      <GlobalCSS />
      <NavBar />
    </Container>
  );
};

export default App;
