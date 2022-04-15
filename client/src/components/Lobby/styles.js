import { makeStyles } from "@material-ui/core/styles";

export const useLobbyStyles = makeStyles((theme) => ({
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
