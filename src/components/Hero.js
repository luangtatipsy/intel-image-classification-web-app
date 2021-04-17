import { Container, Grid, Typography, Button } from "@material-ui/core";
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
        <Grid container xs={12} alignItems="center">
          <Grid item sm={6}>
            <img className={classes.heroSvg} alt="hero" src={heroSvg} />
          </Grid>
          <Grid item sm={6} justify="flex-end">
            <Typography className={classes.tagline} variant="h4" align="right">
              making computer seeing like human vision
            </Typography>
            <Typography
              className={classes.subHeading}
              variant="subtitle1"
              align="right"
            >
              This pretrained model classifies an scene image at a time into
              these following categories: buildings, forest, glacier, mountain,
              sea, street.
            </Typography>
            <Button
              className={classes.tryButton}
              variant="contained"
              color="secondary"
            >
              TRY IT
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
