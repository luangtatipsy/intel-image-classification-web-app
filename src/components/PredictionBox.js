import React from "react";
import Highlight from "react-highlight.js";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    backgroundColor: "black",
    color: theme.palette.primary.contrastText,
  },
}));

export default function PredictionBox() {
  const classes = useStyles();
  const language = "javascript";
  const content = `
    {
      prediction: "Building", 
      confidence: 0.93
    }
  `;
  return (
    <div className={classes.root}>
      <Highlight language={language}>{content}</Highlight>
    </div>
  );
}
