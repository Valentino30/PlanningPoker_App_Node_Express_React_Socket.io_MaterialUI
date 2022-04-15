import io from "socket.io-client";
import queryString from "query-string";
import React, { useState, useEffect } from "react";

import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Container, ButtonGroup } from "@material-ui/core";

import TopDeck from "../components/TopDeck";
import BottomDeck from "../components/BottomDeck";

const useStyles = makeStyles((theme) => ({
  title: {
    margin: "30px",
    color: "#f1f1f1",
  },
  subtitle: {
    margin: "40px",
    color: "#f1f1f1",
  },
  button: {
    color: "#f1f1f1",
    backgroundColor: "#028193",
    marginTop: theme.spacing(3),
  },
}));

let socket;

export default function PokerRoom({ location }) {
  const classes = useStyles();

  const [user, setUser] = useState("");
  const [vote, setVote] = useState("");
  const [votes, setVotes] = useState([]);
  const [users, setUsers] = useState([]);
  const [showVotes, setShowVotes] = useState(false);

  const ENDPOINT = "localhost:4000";
  const { roomId, username } = queryString.parse(location.search);

  useEffect(() => {
    socket = io(ENDPOINT);
    socket.emit("join", { roomId, username });
    return () => {
      socket.emit("disconnect");
      socket.off();
    };
  }, [ENDPOINT, location.search, roomId, username]);

  useEffect(() => {
    const updateUser = ({ id, roomId, username }) =>
      setUser({ id, roomId, username });
    socket.on("you have joined the room", updateUser);
    return () => {
      socket.off("you have joined the room", updateUser);
    };
  }, [user]);

  useEffect(() => {
    const updateUsers = ({ users }) => setUsers(users);
    socket.on("a new user has joined the room", updateUsers);
    return () => {
      socket.off("a new user has joined the room", updateUsers);
    };
  }, [users]);

  useEffect(() => {
    const updateVotes = ({ votes }) => setVotes(votes);
    socket.on("a new vote has been cast in the room", updateVotes);
    return () => {
      socket.off("a new vote has been cast in the room", updateVotes);
    };
  }, [votes]);

  useEffect(() => {
    const revealVotes = ({ showVotes }) => setShowVotes(showVotes);
    socket.on("a user has revealed the votes", revealVotes);
    return () => {
      socket.off("a user has revealed the votes", revealVotes);
    };
  }, [votes]);

  useEffect(() => {
    const resetVotes = ({ votes }) => {
      setShowVotes(false);
      setVotes(votes);
      setVote("");
    };
    socket.on("a user has reset the votes", resetVotes);
    return () => {
      socket.off("a user has reset the votes", resetVotes);
    };
  }, [votes]);

  useEffect(() => {
    const leaveRoom = ({ users, votes }) => {
      setUsers(users);
      setVotes(votes);
    };
    socket.on("a user has left the room", leaveRoom);
    return () => {
      socket.off("a user has left the room", leaveRoom);
    };
  }, [users]);

  const sendVote = (vote) => {
    setVote(vote);
    socket.emit("vote", { vote });
  };

  const revealVotes = () => {
    setShowVotes(true);
    socket.emit("reveal");
  };

  const resetVotes = () => {
    setVote("");
    setVotes([]);
    setShowVotes(false);
    socket.emit("reset");
  };

  return (
    <Container>
      <div>
        <Typography className={classes.title} variant="h3">
          Planning Poker
        </Typography>
      </div>
      <div>
        <Typography className={classes.subtitle} variant="h6">
          RoomId: {roomId}
        </Typography>
      </div>
      <div style={{ height: 175 }}>
        <TopDeck users={users} votes={votes} showVotes={showVotes} />
      </div>
      <div>
        <ButtonGroup variant="text" color="primary">
          <Button className={classes.button} onClick={resetVotes}>
            Reset
          </Button>
          <Button className={classes.button} onClick={revealVotes}>
            Reveal
          </Button>
        </ButtonGroup>
      </div>
      <div>
        <Typography className={classes.title} variant="h4">
          My Deck
        </Typography>
      </div>
      <div>
        <BottomDeck vote={vote} sendVote={sendVote} showVotes={showVotes} />
      </div>
    </Container>
  );
}
