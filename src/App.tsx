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

import lang from "./constants/en";
import { Box } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  card: {
    minWidth: 275
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  }
}));

function App() {
  const classes = useStyles();
  return (
    // <Container maxWidth="sm">
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h4" component="h2" align="center">
          {lang.appName}
        </Typography>
        <SelectedPieces />
      </CardContent>
      <CardActions>
        <Box>
          <Button size="small" variant="outlined" color="primary">
            {lang.randomize}
          </Button>
          <Button size="small" variant="outlined">
            {lang.reset}
          </Button>
        </Box>
      </CardActions>
    </Card>
    // </Container>
  );
}

export default App;
