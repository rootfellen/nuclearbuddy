import Hero from "./components/Hero/Hero";
import NavBar from "./components/NavBar/NavBar";
import { Container } from "./AppElements";

function App() {
  return (
    <Container>
      <Hero>
        <NavBar />
      </Hero>
    </Container>
  );
}

export default App;
