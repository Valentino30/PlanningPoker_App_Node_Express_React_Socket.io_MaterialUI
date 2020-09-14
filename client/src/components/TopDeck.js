import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { Card, Typography, CardContent } from "@material-ui/core";

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
  placeholder: {
    width: 100,
    height: 140,
    borderStyle: "solid",
    borderColor: "#757575",
    backgroundColor: "grey",
    boxShadow: "inset 0 0 10px #000000",
  },
}));

export default function TopDeck({ users, votes, showVotes }) {
  const classes = useStyles();

  return (
    <Grid item xs={12}>
      <Grid container justify="center" spacing={2}>
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

TopDeck.propTypes = {
  users: PropTypes.array.isRequired,
  votes: PropTypes.array.isRequired,
  showVotes: PropTypes.bool.isRequired,
};
