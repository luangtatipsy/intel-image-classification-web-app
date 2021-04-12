import React from "react";
import {
  createStyles,
  makeStyles,
  MuiThemeProvider,
} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import GitHubIcon from "@material-ui/icons/GitHub";
import Container from "@material-ui/core/Container";

const logo = process.env.PUBLIC_URL + "/logo96.png";
const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    logo: {
      maxWidth: 40,
      marginRight: "10px",
    },
    button: {
      margin: theme.spacing(1),
    },
  })
);

export default function Navigator() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="transparent">
        <Container fixed>
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <img src={logo} alt="logo" className={classes.logo} />
            <Typography variant="h6" className={classes.title}></Typography>

            <Button
              variant="text"
              color="default"
              href="https://github.com/luangtatipsy/intel-image-classification"
              target="_blank"
              className={classes.button}
              startIcon={<GitHubIcon />}
            >
              github
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
