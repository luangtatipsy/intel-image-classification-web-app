import React from "react";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import theme from "./theme/MuiTheme";
import Navigator from "./components/Navbar";
import MainSection from "./MainSection";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

function App() {
  return (
    <React.StrictMode>
      <MuiThemeProvider theme={theme}>
        <Navigator />
        <Hero />
        <MainSection />
        <Footer />
      </MuiThemeProvider>
    </React.StrictMode>
  );
}

export default App;
