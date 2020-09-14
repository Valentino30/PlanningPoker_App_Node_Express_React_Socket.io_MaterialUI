import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  Typography,
  CardContent,
  CardActionArea,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  card: {
    width: 100,
    height: 140,
    backgroundColor: "#f1f1f1",
  },
  cardContent: {
    paddingTop: 45,
    paddingBottom: 45,
  },
  cardValue: {
    fontSize: 28,
  },
  button: {
    color: "#f1f1f1",
    backgroundColor: "#028193",
    marginTop: theme.spacing(3),
  },
}));

export default function BottomDeck({ vote, sendVote, showVotes }) {
  const classes = useStyles();

  const cards = ["0", "1/2", "2", "3", "5", "8", "13"];

  return (
    <Grid item xs={12}>
      <Grid container justify="center" spacing={2}>
        {cards.map((card) => (
          <Grid key={card} item>
            <CardActionArea color="yellow">
              <Card
                className={classes.card}
                value={card}
                style={{
                  color: vote === card ? "#f1f1f1" : null,
                  backgroundColor: vote === card ? "#028193" : null,
                }}
                onClick={showVotes ? null : () => sendVote(card)}
              >
                <CardContent className={classes.cardContent}>
                  <Typography className={classes.cardValue}>{card}</Typography>
                </CardContent>
              </Card>
            </CardActionArea>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}

BottomDeck.propTypes = {
  vote: PropTypes.string.isRequired,
  sendVote: PropTypes.func.isRequired,
  showVotes: PropTypes.bool.isRequired,
};
