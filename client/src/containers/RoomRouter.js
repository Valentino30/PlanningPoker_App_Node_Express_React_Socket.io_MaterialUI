import React from "react";
import { Container } from "@material-ui/core";
import RoomInput from "../components/RoomInput";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "300px",
    justifyContent: "center",
    borderRadius: "10px",
    backgroundColor: "#f1f1f1",
    marginTop: theme.spacing(25),
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
  },
}));

export default function RoomRouter() {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <RoomInput action="Join" />
      <RoomInput action="Create" />
    </Container>
  );
}
