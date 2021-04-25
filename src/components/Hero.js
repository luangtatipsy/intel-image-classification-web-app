import { Container, Grid, Typography, Fade, Grow } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
    backgroundColor: theme.palette.primary.light,
  },
  heroSvg: {
    height: "55vh",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  },
  tagline: {
    textTransform: "uppercase",
    fontWeight: "bold",
    color: theme.palette.primary.contrastText,
    marginBottom: theme.spacing(2),
  },
  subHeading: {
    color: theme.palette.primary.contrastText,
  },
  tryButton: {
    float: "right",
    marginTop: theme.spacing(2),
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
  },
}));

const heroSvg = process.env.PUBLIC_URL + "/hero-image.svg";

export default function Hero() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <Grid container alignItems="center" justify="center">
          <Grid item xs={12} lg={6}>
            <Fade in timeout={2000} disableStrictModeCompat={true}>
              <img className={classes.heroSvg} alt="hero" src={heroSvg} />
            </Fade>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Grow in timeout={3000} disableStrictModeCompat={true}>
              <Typography
                className={classes.tagline}
                variant="h4"
                align="right"
              >
                making computer seeing like human vision
              </Typography>
            </Grow>
            <Grow in timeout={4000} disableStrictModeCompat={true}>
              <Typography
                className={classes.subHeading}
                variant="subtitle1"
                align="right"
              >
                This pre-trained model classifies a scene image at a time into
                the following categories: buildings, forest, glacier, mountain,
                sea, street.
              </Typography>
            </Grow>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
