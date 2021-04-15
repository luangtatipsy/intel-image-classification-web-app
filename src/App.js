import React from "react";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import theme from "./theme/MuiTheme";
import Navigator from "./components/Navbar";
import Demo from "./DemoSection";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

function App() {
  return (
    <React.StrictMode>
      <MuiThemeProvider theme={theme}>
        <Navigator />
        <Hero />
        <Demo />
        <Footer />
      </MuiThemeProvider>
    </React.StrictMode>
  );
}

export default App;
