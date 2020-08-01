import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import {
  Paper,
  List,
  ListItemAvatar,
  ListItem,
  ListItemText,
  Divider,
} from "@material-ui/core";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

import ISong from "../shared/interfaces/ISong";

interface IProps {
  selectedPieces: ISong[];
  reset: boolean;
}

export default function SelectedPieces({ selectedPieces, reset }: IProps) {
  console.log(selectedPieces);
  const classes = useStyles();

  const emptyListItem = (
    <ListItem className={classes.listItem}>
      <ListItemAvatar>
        <ChevronRightIcon />
      </ListItemAvatar>
    </ListItem>
  );

  return (
    <Paper className={classes.root}>
      <List className={classes.list}>
        {reset || !selectedPieces.length ? (
          <>
            {emptyListItem}
            <Divider variant="fullWidth" component="hr" light />
            {emptyListItem}
            <Divider variant="fullWidth" component="hr" light />
            {emptyListItem}
          </>
        ) : (
          selectedPieces.map((piece, index) => {
            return piece ? (
              <>
                <ListItem
                  className={classes.listItem}
                  key={piece.playingOrder + "." + piece.name}
                >
                  <ListItemAvatar>
                    <ChevronRightIcon />
                  </ListItemAvatar>
                  <ListItemText
                    primary={piece.name}
                    secondary={`Book. ${piece.booknumber}, No. ${piece.bookOrder}`}
                  ></ListItemText>
                </ListItem>
                {index < selectedPieces.length - 1 && (
                  <Divider variant="fullWidth" component="hr" light />
                )}
              </>
            ) : (
              <>
                {emptyListItem}
                <Divider variant="fullWidth" component="hr" light />
              </>
            );
          })
        )}
      </List>
    </Paper>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      marginTop: theme.spacing(3),
      overflowX: "auto",
      display: "flex",
      justifyContent: "center",
    },
    list: { width: "100%", padding: 0 },
    listItem: {
      height: "4rem",
    },
  })
);
