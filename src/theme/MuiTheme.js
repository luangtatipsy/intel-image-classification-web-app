import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    typography: {
        useNextVariants: true,
    },
    palette: {
        primary: {
            light: '#4eaa90',
            main: '#137a63',
            dark: '#004d39',
            contrastText: '#ffffff',
        },
        secondary: {
            light: '#d4ffff',
            main: '#a1f4de',
            dark: '#6fc1ac',
            contrastText: '#000000',
        },
    },
});

export default theme;