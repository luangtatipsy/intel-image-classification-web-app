import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.contrastText,
  },
  container: {
    gridGap: theme.spacing(1),
  },
  socialButton: {
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: theme.palette.primary.contrastText,
    color: theme.palette.primary.contrastText,
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  copyright: {
    fontWeight: "bold",
  },
}));

export default function Footer() {
  const classes = useStyles();
  const currentYear = new Date().getFullYear();

  return (
    <div className={classes.root}>
      <Grid
        className={classes.container}
        container
        direction="row"
        justify="space-around"
        alignItems="center"
      >
        <Grid item xs={12} sm={4} align="center">
          <Typography
            className={classes.copyright}
            variant="button"
            component={"span"}
          >
            Made by luangtatipsy © {currentYear}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4} align="center">
          <IconButton
            className={classes.socialButton}
            component="span"
            aria-label="github.com/luangtatipsy"
            onClick={() => {
              window.open("https://github.com/luangtatipsy");
            }}
          >
            <GitHubIcon />
          </IconButton>
          <IconButton
            className={classes.socialButton}
            component="span"
            aria-label="facebook.com/luangtatipsyy"
            onClick={() => {
              window.open("https://facebook.com/luangtatipsyy");
            }}
          >
            <FacebookIcon />
          </IconButton>
          <IconButton
            className={classes.socialButton}
            component="span"
            aria-label="instagram.com/luangtatipsyy"
            onClick={() => {
              window.open("https://instagram.com/luangtatipsyy");
            }}
          >
            <InstagramIcon />
          </IconButton>
          <IconButton
            className={classes.socialButton}
            component="span"
            aria-label="linkedin.com/in/taechawatk/"
            onClick={() => {
              window.open("https://linkedin.com/in/taechawatk/");
            }}
          >
            <LinkedInIcon />
          </IconButton>
        </Grid>
      </Grid>
    </div>
  );
}
