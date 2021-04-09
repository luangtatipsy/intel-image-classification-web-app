import React from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import theme from "./theme/MuiTheme";
import Navigator from "./components/Navbar"

function App() {
  return (
    <React.StrictMode>
      <MuiThemeProvider theme={theme}>
        <Navigator />
      </MuiThemeProvider>
    </React.StrictMode>
  );
}

export default App;