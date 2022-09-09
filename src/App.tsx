import Hero from "./components/Hero/Hero";
import NavBar from "./components/NavBar/NavBar";
import { Container } from "./AppElements";
import Logo from "./components/Logo/Logo";
import { Header } from "./components/Hero/HeroElements";

function App() {
  return (
    <Hero>
      <Container>
        <Header>
          <Logo />
          <NavBar />
        </Header>
      </Container>
    </Hero>
  );
}

export default App;
