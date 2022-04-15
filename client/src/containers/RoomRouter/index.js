import React from "react";
import { Container } from "@material-ui/core";

import { useRoomRouterStyles } from "./styles";
import Lobby from "../../components/Lobby";

export default function RoomRouter() {
  const classes = useRoomRouterStyles();

  return (
    <Container className={classes.container}>
      <Lobby action="Join" />
      <Lobby action="Create" />
    </Container>
  );
}
