import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";

import ISong from "./shared/interfaces/ISong";
import lang from "./constants/en";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      marginTop: theme.spacing(3),
      overflowX: "auto",
    },
    table: {
      minWidth: 300,
    },
  })
);

interface IProps {
  selectedPieces: ISong[];
  reset: boolean;
}

export default function SelectedPieces({ selectedPieces, reset }: IProps) {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          {reset ? (
            <TableRow>
              <TableCell align="center">{lang.CLICK_RANDOMIZE}</TableCell>
            </TableRow>
          ) : selectedPieces.length === 0 ? (
            <TableRow>
              <TableCell align="center">{lang.CLICK_RESET}</TableCell>
            </TableRow>
          ) : null}
        </TableHead>
        <TableBody>
          {reset
            ? null
            : selectedPieces.map((piece) => (
                <TableRow key={piece.playingOrder + "." + piece.name}>
                  <TableCell component="th" scope="row" align="center">
                    {piece.bookOrder + ". " + piece.name}
                  </TableCell>
                </TableRow>
              ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
