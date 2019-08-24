import * as React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import lang from "./constants/en";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      marginTop: theme.spacing(3),
      overflowX: "auto"
    },
    table: {
      minWidth: 300
    }
  })
);

function createData(name: string) {
  return { name };
}

const rows = [
  createData("Frozen yoghurt"),
  createData("Ice cream sandwich"),
  createData("Eclair")
];

interface IProps {
  selectedPieces: string[];
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
              <TableCell align="center">{lang.CLICK_RESET}</TableCell>
            </TableRow>
          ) : null}
        </TableHead>
        <TableBody>
          {reset
            ? null
            : rows.map(row => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row" align="center">
                    {row.name}
                  </TableCell>
                </TableRow>
              ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
