import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
  Paper,
} from "@material-ui/core";

import ISong from "./shared/interfaces/ISong";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      marginTop: theme.spacing(3),
      overflowX: "auto",
      display: "flex",
      justifyContent: "center",
    },
  })
);

interface IProps {
  selectedPieces: ISong[];
  reset: boolean;
}

export default function SelectedPieces({ selectedPieces, reset }: IProps) {
  console.log(selectedPieces);
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Table>
        <TableBody>
          {reset || !selectedPieces.length ? (
            <>
              <TableRow>
                <TableCell component="th" scope="row" align="center">
                  {"---"}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row" align="center">
                  {"---"}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row" align="center">
                  {"---"}
                </TableCell>
              </TableRow>
            </>
          ) : (
            selectedPieces.map((piece) => (
              <TableRow key={piece.playingOrder + "." + piece.name}>
                <TableCell component="th" scope="row" align="center">
                  {piece.bookOrder + ". " + piece.name}
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </Paper>
  );
}
