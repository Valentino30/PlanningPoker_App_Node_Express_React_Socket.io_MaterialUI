import React from "react";
import PropTypes from "prop-types";

import Grid from "@material-ui/core/Grid";
import { Card, Typography, CardContent } from "@material-ui/core";

import { useUpperDeckStyles } from "./styles";

export default function UpperDeck({ users, votes, showVotes }) {
  const classes = useUpperDeckStyles();

  return (
    <Grid item xs={12}>
      <Grid container justifyContent="center" spacing={2}>
        {users.map((user) => (
          <Grid key={user.id} item>
            {votes.some((vote) => vote.username === user.username) ? (
              <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                  <Typography className={classes.cardValue}>
                    {showVotes
                      ? votes.find((vote) => vote.username === user.username)
                          .value
                      : "?"}
                  </Typography>
                </CardContent>
              </Card>
            ) : (
              <Card className={classes.placeholder}></Card>
            )}
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}

UpperDeck.propTypes = {
  users: PropTypes.array.isRequired,
  votes: PropTypes.array.isRequired,
  showVotes: PropTypes.bool.isRequired,
};
