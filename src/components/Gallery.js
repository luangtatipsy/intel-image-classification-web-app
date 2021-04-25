import React from "react";
import { makeStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import SceneImage from "./SceneImage";

const useStyles = makeStyles((theme) => ({
  root: {},
  imageWrapper: {
    margin: theme.spacing(1),
  },
  imagePaper: {
    "&:hover": {
      cursor: "pointer",
    },
  },
}));

export default function Gallery(props) {
  const classes = useStyles();
  const sceneImages = props.images.map((image) => (
    <Grid key={image.id} className={classes.imageWrapper} item xs={3}>
      <SceneImage
        key={image.id}
        image={image}
        handleClick={props.handleClick}
      />
    </Grid>
  ));

  return (
    <div className={classes.root}>
      <Grid container xs={12} item alignItems="center" justify="center">
        {sceneImages}
      </Grid>
    </div>
  );
}
