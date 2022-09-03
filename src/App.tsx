import Hero from "./components/Hero/Hero";
import NavBar from "./components/NavBar/NavBar";
import { Container } from "./AppElements";

function App() {
  return (
    <Hero>
      <Container>
        <NavBar />
      </Container>
    </Hero>
  );
}

export default App;
