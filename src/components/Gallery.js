import React from "react";
import { withStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Image from "material-ui-image";
import SceneImage from "./SceneImage";
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
  selected: {
    border: "2px solid blue",
  },
});

const imageArray = [
  {
    src: process.env.PUBLIC_URL + "/images/3.jpg",
    title: "Image",
    author: "author",
  },
  {
    src: process.env.PUBLIC_URL + "/images/5.jpg",
    title: "Image",
    author: "author",
  },
  {
    src: process.env.PUBLIC_URL + "/images/6.jpg",
    title: "Image",
    author: "author",
  },
  {
    src: process.env.PUBLIC_URL + "/images/11.jpg",
    title: "Image",
    author: "author",
  },
  {
    src: process.env.PUBLIC_URL + "/images/14.jpg",
    title: "Image",
    author: "author",
  },
  {
    src: process.env.PUBLIC_URL + "/images/3.jpg",
    title: "Image",
    author: "author",
  },
  {
    src: process.env.PUBLIC_URL + "/images/5.jpg",
    title: "Image",
    author: "author",
  },
  {
    src: process.env.PUBLIC_URL + "/images/6.jpg",
    title: "Image",
    author: "author",
  },
  {
    src: process.env.PUBLIC_URL + "/images/11.jpg",
    title: "Image",
    author: "author",
  },
  {
    src: process.env.PUBLIC_URL + "/images/14.jpg",
    title: "Image",
    author: "author",
  },
  {
    src: process.env.PUBLIC_URL + "/images/3.jpg",
    title: "Image",
    author: "author",
  },
  {
    src: process.env.PUBLIC_URL + "/images/5.jpg",
    title: "Image",
    author: "author",
  },
  {
    src: process.env.PUBLIC_URL + "/images/6.jpg",
    title: "Image",
    author: "author",
  },
  {
    src: process.env.PUBLIC_URL + "/images/11.jpg",
    title: "Image",
    author: "author",
  },
  {
    src: process.env.PUBLIC_URL + "/images/14.jpg",
    title: "Image",
    author: "author",
  },
];

class Gallery extends React.Component {
  constructor() {
    super();
    this.state = {
      imageId: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(props) {
    console.log(props);
  }

  render() {
    const { classes } = this.props;
    const images = imageArray.map((image, idx) => (
      <Grid key={idx} className={classes.imageWrapper} item xs={3}>
        <SceneImage key={idx} src={image.src} />
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
