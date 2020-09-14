import shortid from "shortid";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  link: {
    textDecoration: "none",
  },
  input: {
    width: "80%",
    backgroundColor: "#FFFFFF",
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  button: {
    width: "80%",
    color: "#f1f1f1",
    backgroundColor: "#028193",
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

export default function RoomInput({ action }) {
  const classes = useStyles();

  const [room, setRoom] = useState(shortid.generate());
  const [username, setUsername] = useState("");

  return (
    <div>
      {action === "Join" && (
        <TextField
          variant="outlined"
          label="type your room id"
          className={classes.input}
          onChange={(e) => setRoom(e.target.value)}
        />
      )}
      <TextField
        variant="outlined"
        label="type your username"
        className={classes.input}
        onChange={(e) => setUsername(e.target.value)}
      />
      <Link to={`/vote?roomId=${room}&username=${username}`} className={classes.link}>
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
        >
          {action} Room
        </Button>
      </Link>
    </div>
  );
}
