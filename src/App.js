import HeroSection from "./sections/HeroSection";
import Quote from "./sections/Quote";
import { GlobalStyle } from "./styles/GlobalStyle";
function App() {
  return (
    <>
      <GlobalStyle />
      <Quote />
      <HeroSection />
    </>
  );
}

export default App;
