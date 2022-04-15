import shortid from "shortid";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";

import { useLobbyStyles } from "./styles";

export default function Lobby({ action }) {
  const classes = useLobbyStyles();

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
      <Link
        to={`/vote?roomId=${room}&username=${username}`}
        className={classes.link}
      >
        <Button className={classes.button} variant="contained" color="primary">
          {action} Room
        </Button>
      </Link>
    </div>
  );
}
