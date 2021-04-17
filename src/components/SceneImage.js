import React from "react";
import { withStyles } from "@material-ui/styles";
import Paper from "@material-ui/core/Paper";
import Image from "material-ui-image";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    "&:hover": {
      cursor: "pointer",
    },
  },
  selected: {
    borderWidth: 8,
    borderStyle: "solid",
    borderColor: theme.palette.primary.main,
  },
}));

export default function SceneImage(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Paper
        className={`${classes.wrapper} ${
          props.image.selected ? classes.selected : ""
        }`}
        variant="elevation"
        square
        selected={props.image.selected}
        onClick={() => props.handleClick(props.image.id)}
      >
        <Image src={props.image.src} />
      </Paper>
    </React.Fragment>
  );
}
