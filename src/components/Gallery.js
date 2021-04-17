import React from "react";
import { withStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import SceneImage from "./SceneImage";
import imagesData from "./imagesData";
import "./Gallery.css";

const useStyles = (theme) => ({
  root: {
    display: "flex",
  },
  imageWrapper: {
    margin: theme.spacing(1),
  },
  gridList: {
    width: 500,
    height: 450,
  },
  imagePaper: {
    "&:hover": {
      cursor: "pointer",
    },
  },
});

class Gallery extends React.Component {
  constructor() {
    super();
    this.state = {
      images: imagesData,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(id) {
    const updatedImages = this.state.images.map((image) => {
      if (image.id === id) {
        return {
          ...image,
          selected: true,
        };
      }
      return {
        ...image,
        selected: false,
      };
    });

    return this.setState({
      images: updatedImages,
    });
  }

  render() {
    const { classes } = this.props;
    const images = this.state.images.map((image) => (
      <Grid key={image.id} className={classes.imageWrapper} item xs={3}>
        <SceneImage
          key={image.id}
          image={image}
          handleClick={this.handleClick}
        />
      </Grid>
    ));

    return (
      <div className={classes.root}>
        <Grid container xs={12} item alignItems="center" justify="center">
          {images}
        </Grid>
      </div>
    );
  }
}

export default withStyles(useStyles)(Gallery);
