import React from "react";
import PropTypes from "prop-types";

import {
  Card,
  Typography,
  CardContent,
  CardActionArea,
} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

import { useLowerDeckStyles } from "./styles";

export default function LowerDeck({ vote, sendVote, showVotes }) {
  const classes = useLowerDeckStyles();

  const cards = ["0", "1/2", "2", "3", "5", "8", "13"];

  return (
    <Grid item xs={12}>
      <Grid container justifyContent="center" spacing={2}>
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

LowerDeck.propTypes = {
  vote: PropTypes.string.isRequired,
  sendVote: PropTypes.func.isRequired,
  showVotes: PropTypes.bool.isRequired,
};
