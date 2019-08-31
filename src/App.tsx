import * as React from "react";
import "./App.css";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid
} from "@material-ui/core";
import Select from "react-select";

import ISong from "./shared/interfaces/ISong";
import { compareSongs } from "./shared/helpers/helpers";

import SelectedPieces from "./SelectedPieces";

import bookOne, { bookOneAutoSelect } from "./constants/bookOne";
import lang from "./constants/en";

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

function App() {
  const classes = useStyles();

  const [selectedPieces, setSelectedPieces] = React.useState([] as any);
  const [currentBookOne, setCurrentBookOne] = React.useState(bookOne);
  const [
    selectedPieceFromAutoSelector,
    setSelectedPieceFromAutoSelector
  ] = React.useState();
  const [reset, setReset] = React.useState(true);

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

    const newSelectedPieces = [firstPiece, secondPiece, thirdPiece]
      .filter(piece => piece !== nullSong)
      .sort(compareSongs);

    setSelectedPieces(newSelectedPieces);
    setReset(false);
    setCurrentBookOne(tempBookOne);
  };

  const resetSongPool = () => {
    setSelectedPieces([]);
    setStudentsCurrentPlayablePieces();
    setReset(true);
  };

  const handleAutoSelectChange = (selectedOption: any) => {
    setSelectedPieceFromAutoSelector(selectedOption);
  };

  React.useEffect(() => {
    setStudentsCurrentPlayablePieces();
  }, [selectedPieceFromAutoSelector]);

  const setStudentsCurrentPlayablePieces = () => {
    if (selectedPieceFromAutoSelector == null) {
      return;
    }
    const studentsPlayablePieces = [] as any;
    bookOne.forEach((piece, index) => {
      if (piece.bookOrder <= selectedPieceFromAutoSelector.value.bookOrder) {
        studentsPlayablePieces[index] = piece;
      }
    });
    setCurrentBookOne(studentsPlayablePieces);
  };

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h3" component="h2" align="center" color="primary">
          {lang.APP_NAME}
        </Typography>

        <Grid container={true} spacing={3}>
          <Grid item={true} xs={12}>
            <SelectedPieces selectedPieces={selectedPieces} reset={reset} />
          </Grid>
          <Grid item={true} xs={12}>
            <Select
              className="basic-single"
              classNamePrefix="select"
              isClearable={true}
              isSearchable={true}
              placeholder={lang.CURRENT_PIECE}
              options={bookOneAutoSelect}
              onChange={handleAutoSelectChange}
            />
          </Grid>
        </Grid>
      </CardContent>
      <CardActions>
        <Grid container={true} direction="column" alignItems="center">
          <Grid item={true}>
            <Button
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
