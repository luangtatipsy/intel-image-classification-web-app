import React from "react";
import { withStyles } from "@material-ui/styles";
import Paper from "@material-ui/core/Paper";
import Image from "material-ui-image";

const useStyles = (theme) => ({
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
});

class SceneImage extends React.Component {
  constructor() {
    super();
    this.state = {
      isSelected: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => {
      console.log(prevState);
      return {
        isSelected: !prevState.isSelected,
      };
    });
  }

  render() {
    const { classes } = this.props;
    let selectedClass = this.state.isSelected ? classes.selected : "";

    return (
      <React.Fragment>
        <Paper
          className={`${classes.wrapper} ${selectedClass}`}
          variant="elevation"
          square
          onClick={this.handleClick}
        >
          <Image src={this.props.src} />
        </Paper>
      </React.Fragment>
    );
  }
}

export default withStyles(useStyles)(SceneImage);
