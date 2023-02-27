import { useContext } from "react";
import { ThemeProvider } from "styled-components";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Container, GlobalStyles } from "./components/styled";
import content from "./content";
import { AppContext } from "./context/AppContext";
import theme from "./theme";

function App() {
  const { colorTheme } = useContext(AppContext);
  console.log(colorTheme);
  return (
    <ThemeProvider theme={theme}>
        <GlobalStyles colorTheme={colorTheme} />
        <Header />
        <Container>
          {content.map(item => (
            <Card key={item.id} item={item} />
          ))}
        </Container>
        <Footer />
    </ThemeProvider>
  );
}

export default App;
