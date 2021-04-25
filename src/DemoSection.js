import React from "react";
import { withStyles } from "@material-ui/core/styles";
import {
  Button,
  Container,
  Grid,
  Typography,
  IconButton,
} from "@material-ui/core";
import RefreshIcon from "@material-ui/icons/Refresh";
import PredictionBox from "./components/PredictionBox";
import Gallery from "./components/Gallery";
import createImagesArray from "./components/imagesData";
import * as tf from "@tensorflow/tfjs";

const useStyles = (theme) => ({
  root: {
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
  },
  container: {
    gridGap: theme.spacing(1),
  },
  title: {
    marginBottom: theme.spacing(2),
    fontWeight: "bold",
    textTransform: "uppercase",
    color: theme.palette.primary.dark,
  },
  divider: {
    marginBottom: theme.spacing(5),
    border: `7px solid ${theme.palette.primary.light}`,
    width: "20%",
  },
  subtitle: {
    marginLeft: theme.spacing(2),
    fontWeight: "bold",
    color: theme.palette.primary.dark,
  },
  inputImage: {
    width: 150,
    height: 150,
    display: "none",
  },
  predictButton: {
    fontWeight: "bold",
    marginTop: theme.spacing(1),
    color: theme.palette.primary.contrastText,
  },
  overlay: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    backgroundColor: "#E0E0E0",
    height: 115,
  },
});

class Demo extends React.Component {
  constructor() {
    super();
    this.imagesData = createImagesArray();
    this.state = {
      images: this.imagesData.map((image) => {
        return {
          ...image,
          selected: false,
        };
      }),
      currentImage: null,
      result: {
        prediction: null,
        confidence: null,
      },
      onLoading: false,
    };

    this.modelUrl =
      "https://cdn.jsdelivr.net/gh/luangtatipsy/intel-image-classification-web-app/public/models/intel_img_clf_best_weight.js/model.json";
    this.targets = [
      "buildings",
      "forest",
      "glacier",
      "mountain",
      "sea",
      "street",
    ];

    this.handleImageClick = this.handleImageClick.bind(this);
    this.handleRefresh = this.handleRefresh.bind(this);
    this.handlePredictionClick = this.handlePredictionClick.bind(this);
  }

  handleImageClick(id) {
    let currentImage;
    const updatedImages = this.state.images.map((image) => {
      if (image.id === id) {
        currentImage = image.src;
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
      currentImage: currentImage,
      images: updatedImages,
    });
  }

  handleRefresh() {
    const images = createImagesArray();
    this.setState((prevState) => {
      return {
        images: images,
        currentImage: prevState.currentImage,
        result: prevState.result,
        onLoading: prevState.onLoading,
      };
    });
  }

  readImage(inputImage) {
    var canvas = document.createElement("canvas");
    var context = canvas.getContext("2d");

    context.drawImage(inputImage, 0, 0);

    return context.getImageData(0, 0, inputImage.width, inputImage.height);
  }

  async handlePredictionClick() {
    this.setState((prevState) => {
      return {
        images: prevState.images,
        currentImage: prevState.currentImage,
        result: prevState.result,
        onLoading: true,
      };
    });

    const model = await tf.loadLayersModel(this.modelUrl);
    const inputImage = document.getElementById("input-image");
    const imageData = this.readImage(inputImage);
    const imageTensor = tf.browser
      .fromPixels(imageData)
      .toFloat()
      .div(tf.scalar(127.5))
      .sub(tf.scalar(1.0))
      .expandDims(0);
    const prediction = model.predict(imageTensor);
    const maxIdx = prediction.argMax(-1).dataSync()[0];
    const probabilities = prediction.data();
    const result = await probabilities.then((probabilities) => {
      return {
        prediction: this.targets[maxIdx],
        confidence: Math.max(...probabilities).toFixed(3),
      };
    });

    this.setState((prevState) => {
      return {
        images: prevState.images,
        currentImage: prevState.currentImage,
        result: result,
        onLoading: false,
      };
    });
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Container>
          <Typography className={classes.title} variant="h4" align="center">
            live demo
          </Typography>
          <hr className={classes.divider} />
          <Grid container direction="row">
            <Grid
              container
              item
              xs={12}
              sm={7}
              justify="center"
              alignItems="center"
            >
              <Grid item xs={8}>
                <Typography
                  className={classes.subtitle}
                  variant="h5"
                  align="left"
                >
                  Choose an Image
                </Typography>
              </Grid>
              <Grid item xs={2} align="right">
                <IconButton
                  onClick={this.handleRefresh}
                  disabled={this.state.onLoading}
                >
                  <RefreshIcon />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>

          <Grid container direction="row" alignItems="flex-start">
            <Grid className={classes.gallery} item xs={12} sm={7}>
              <img
                id="input-image"
                className={classes.inputImage}
                src={this.state.currentImage}
                alt="sample being predicted"
              />
              <Gallery
                images={this.state.images}
                handleClick={this.handleImageClick}
              />
            </Grid>
            <Grid className={classes.prediction} item xs={12} sm={5}>
              <Button
                className={classes.predictButton}
                variant="contained"
                fullWidth
                color="primary"
                disabled={
                  this.state.currentImage === null || this.state.onLoading
                }
                onClick={this.handlePredictionClick}
              >
                predict
              </Button>
              <PredictionBox
                result={this.state.result}
                onLoading={this.state.onLoading}
              />
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default withStyles(useStyles)(Demo);
