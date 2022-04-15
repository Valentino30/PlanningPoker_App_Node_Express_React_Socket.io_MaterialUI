import { makeStyles } from "@material-ui/core/styles";

export const useLowerDeckStyles = makeStyles((theme) => ({
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
  button: {
    color: "#f1f1f1",
    backgroundColor: "#028193",
    marginTop: theme.spacing(3),
  },
}));
