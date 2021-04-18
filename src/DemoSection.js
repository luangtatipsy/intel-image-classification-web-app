import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Container, Grid, Typography } from "@material-ui/core";
import PredictionBox from "./components/PredictionBox";
import Gallery from "./components/Gallery";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
  },
  container: {
    gridGap: theme.spacing(1),
  },
  title: {
    marginBottom: theme.spacing(5),
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  subtitle: {
    marginBottom: theme.spacing(1),
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  gallery: {
    // backgroundColor: "red",
  },
  predictButton: {
    fontWeight: "bold",
  },
  prediction: {},
}));

export default function Demo() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container>
        <Typography className={classes.title} variant="h4" align="center">
          live demo
        </Typography>
        <Grid container direction="row" alignItems="center">
          <Grid className={classes.gallery} item xs={12} sm={8}>
            <Typography
              className={classes.subtitle}
              variant="h5"
              align="center"
            >
              choose an image
            </Typography>
            <Gallery />
          </Grid>
          <Grid className={classes.prediction} item xs={12} sm={4}>
            <Button
              className={classes.predictButton}
              variant="contained"
              color="secondary"
              fullWidth
            >
              predict
            </Button>
            <PredictionBox />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
