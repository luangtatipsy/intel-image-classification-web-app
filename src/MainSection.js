import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

import Gallery from "./components/Gallery";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
  },
  container: {
    gridGap: theme.spacing(1),
  },
  gallery: {
    // backgroundColor: "red",
  },
  result: {
    // backgroundColor: "green",
  },
}));

export default function MainSection() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container>
        <Grid container direction="row">
          <Grid className={classes.gallery} item xs={12} sm={8}>
            <Gallery />
          </Grid>
          <Grid className={classes.result} item xs={12} sm={4}></Grid>
        </Grid>
      </Container>
    </div>
  );
}
