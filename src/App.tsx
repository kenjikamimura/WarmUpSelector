import React, { useState, useEffect, useCallback } from "react";
import "./App.css";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
} from "@material-ui/core";
import Select from "react-select";
import { AppBar } from "./components/AppBar";
import ISong from "./shared/interfaces/ISong";
import { compareSongs } from "./shared/helpers/helpers";

import SelectedPieces from "./SelectedPieces";

import songPool, {
  songPoolAutoSelect,
  ISongPoolAutoSelect,
} from "./constants/songPool";
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

  const [selectedPieces, setSelectedPieces] = useState([] as ISong[]);
  const [currentsongPool, setCurrentsongPool] = useState(songPool);
  const [
    selectedPieceFromAutoSelector,
    setSelectedPieceFromAutoSelector,
  ] = useState(undefined as ISongPoolAutoSelect | undefined);
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

      if (tempsongPool[randomIndex] !== undefined) {
        newSelectedPieces.push(tempsongPool[randomIndex]);
      }

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

  const setStudentsCurrentPlayablePieces = useCallback(() => {
    if (selectedPieceFromAutoSelector == null) {
      return;
    }

    const studentsPlayablePieces = songPool.filter(
      (piece) =>
        piece.playingOrder <= selectedPieceFromAutoSelector?.value?.playingOrder
    ) as ISong[];

    setCurrentsongPool(studentsPlayablePieces);
  }, [selectedPieceFromAutoSelector]);

  useEffect(() => {
    setStudentsCurrentPlayablePieces();
  }, [selectedPieceFromAutoSelector, setStudentsCurrentPlayablePieces]);

  return (
    <AppBar>
      <Card className={classes.card}>
        <CardContent>
          <Grid container={true} spacing={3} justify="center">
            <Grid item={true} xs={10}>
              <SelectedPieces selectedPieces={selectedPieces} reset={reset} />
            </Grid>
            <Grid item={true} xs={10}>
              <Select
                className="basic-single"
                classNamePrefix="select"
                isClearable={true}
                isSearchable={true}
                placeholder={lang.CURRENT_PIECE}
                options={songPoolAutoSelect}
                onChange={(selectedOption) => {
                  setSelectedPieceFromAutoSelector(
                    selectedOption as ISongPoolAutoSelect
                  );
                }}
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
                disabled={!selectedPieceFromAutoSelector}
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
    </AppBar>
  );
}

export default App;
