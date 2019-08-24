import * as React from "react";
import "./App.css";
import { makeStyles } from "@material-ui/core/styles";
// import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
// import Container from "@material-ui/core/Container";

import SelectedPieces from "./SelectedPieces";
import bookOne from "./constants/bookOne";

import lang from "./constants/en";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  card: {
    minWidth: 275,
    minHeight: 1000
  },
  button: {
    margin: theme.spacing(1)
  },
  title: {
    fontSize: 14
  }
}));

interface ISong {
  bookOrder: number;
  name: string;
}

function App() {
  const classes = useStyles();

  const [selectedPieces, setSelectedPieces] = React.useState([] as any);
  const [currentBookOne, setCurrentBookOne] = React.useState(bookOne);
  const [reset, setReset] = React.useState(true);

  // Todo extract this out to helper file
  const compare = (a: ISong, b: ISong) => {
    if (a === null || b === null) {
      return 0;
    }
    if (a.bookOrder < b.bookOrder) {
      return -1;
    }
    if (a.bookOrder > b.bookOrder) {
      return 1;
    }
    return 0;
  };

  const generateRandomPieces = () => {
    let tempBookOne = currentBookOne;

    const nullSong: ISong = {
      bookOrder: 0,
      name: ""
    };
    // Todo refactor this to be cleaner, extract out to helper file
    const firstPiece = tempBookOne.length
      ? tempBookOne[Math.floor(Math.random() * tempBookOne.length)]
      : nullSong;
    tempBookOne = tempBookOne.filter(
      song => firstPiece.bookOrder !== song.bookOrder
    );

    const secondPiece = tempBookOne.length
      ? tempBookOne[Math.floor(Math.random() * tempBookOne.length)]
      : nullSong;
    tempBookOne = tempBookOne.filter(
      song => secondPiece.bookOrder !== song.bookOrder
    );
    const thirdPiece = tempBookOne.length
      ? tempBookOne[Math.floor(Math.random() * tempBookOne.length)]
      : nullSong;

    tempBookOne = tempBookOne.filter(
      song => thirdPiece.bookOrder !== song.bookOrder
    );

    let selectedPieces2 = [firstPiece, secondPiece, thirdPiece].filter(
      piece => piece !== nullSong
    );
    selectedPieces2 = selectedPieces2.sort(compare);

    setSelectedPieces(selectedPieces2);
    setReset(false);
    setCurrentBookOne(tempBookOne);
  };

  const resetSongPool = () => {
    setSelectedPieces([]);
    setCurrentBookOne(bookOne);
    setReset(true);
  };

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h4" component="h2" align="center">
          {lang.APP_NAME}
        </Typography>
        <SelectedPieces selectedPieces={selectedPieces} reset={reset} />
      </CardContent>
      <CardActions>
        <Grid container={true} direction="column" alignItems="center">
          <Grid item={true}>
            <Button
              size="small"
              variant="outlined"
              color="primary"
              className={classes.button}
              onClick={generateRandomPieces}
            >
              {lang.RANDOMIZE}
            </Button>
          </Grid>
          <Grid item={true}>
            <Button
              size="small"
              variant="outlined"
              className={classes.button}
              onClick={resetSongPool}
            >
              {lang.RESET_BUTTON}
            </Button>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
}

export default App;
