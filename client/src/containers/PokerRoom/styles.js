import { makeStyles } from "@material-ui/core/styles";

export const usePokerRoomStyles = makeStyles((theme) => ({
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
