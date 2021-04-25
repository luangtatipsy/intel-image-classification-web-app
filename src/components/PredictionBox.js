import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Card, CardContent } from "@material-ui/core";
import LoadingOverlay from "react-loading-overlay";
import BeatLoader from "react-spinners/BeatLoader";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    backgroundColor: "#E0E0E0",
    height: 109,
  },
  title: {
    marginBottom: theme.spacing(2),
    color: theme.palette.text.disabled,
  },
  scene: {
    color: theme.palette.primary.main,
  },
  confidence: {
    color: theme.palette.primary.main,
  },
  spinner: {
    marginTop: theme.spacing(3),
  },
  show: {
    display: "block",
  },
  hidden: {
    display: "None",
  },
}));

export default function PredictionBox(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent className={props.onLoading ? classes.hidden : classes.show}>
        <Box className={classes.title} fontFamily="Monospace">
          #result
        </Box>
        <Box fontFamily="Monospace" fontSize={16}>
          "prediction":&nbsp;
          <span className={classes.scene}>
            {props.result.prediction === null
              ? "null"
              : props.result.prediction}
          </span>
        </Box>
        <Box fontFamily="Monospace" fontSize={16}>
          "confidence":&nbsp;
          <span className={classes.confidence}>
            {props.result.confidence === null
              ? "null"
              : props.result.confidence}
          </span>
        </Box>
      </CardContent>
      <CardContent className={props.onLoading ? classes.show : classes.hidden}>
        <LoadingOverlay
          active={true}
          spinner={<BeatLoader color="#137a63" />}
          className={classes.spinner}
        ></LoadingOverlay>
      </CardContent>
    </Card>
  );
}
