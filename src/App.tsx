import * as React from "react";
import "./App.css";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
} from "@material-ui/core";
import Select from "react-select";

import ISong from "./shared/interfaces/ISong";
import { compareSongs } from "./shared/helpers/helpers";

import SelectedPieces from "./SelectedPieces";

import songPool, { songPoolAutoSelect } from "./constants/songPool";
import lang from "./constants/en";

const useStyles = makeStyles((theme) => ({
  card: {
    minWidth: 275,
    minHeight: 1000,
  },
  button: {
    margin: theme.spacing(1),
  },
  title: {
    fontSize: 14,
  },
}));

function App() {
  const classes = useStyles();

  const [selectedPieces, setSelectedPieces] = React.useState([] as any);
  const [currentsongPool, setCurrentsongPool] = React.useState(songPool);
  const [
    selectedPieceFromAutoSelector,
    setSelectedPieceFromAutoSelector,
  ] = React.useState({ value: { playingOrder: 0 } });
  const [reset, setReset] = React.useState(true);

  const generateRandomPieces = () => {
    const tempsongPool = currentsongPool;
    const nullSong: ISong = {
      booknumber: 0,
      bookOrder: 0,
      playingOrder: 0,
      name: "",
      composer: null,
    };
    const newSelectedPieces: ISong[] = [];
    const numberOfPiecesToSelect = 3;

    for (let i = 0; i < numberOfPiecesToSelect; i++) {
      const randomIndex = Math.floor(Math.random() * tempsongPool.length);
      newSelectedPieces[i] = tempsongPool.length
        ? tempsongPool[randomIndex]
        : nullSong;
      tempsongPool.splice(randomIndex, 1);
    }

    const newSelectedPiecesFilteredAndSorted = newSelectedPieces
      .filter((piece) => piece !== nullSong)
      .sort(compareSongs);

    setSelectedPieces(newSelectedPiecesFilteredAndSorted);
    setReset(false);
    setCurrentsongPool(tempsongPool);
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
    songPool.forEach((piece, index) => {
      if (
        piece.playingOrder <= selectedPieceFromAutoSelector.value.playingOrder
      ) {
        studentsPlayablePieces[index] = piece;
      }
    });
    setCurrentsongPool(studentsPlayablePieces);
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
              options={songPoolAutoSelect}
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
              disabled={
                selectedPieceFromAutoSelector === null ||
                selectedPieceFromAutoSelector === undefined
                  ? true
                  : false
              }
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
