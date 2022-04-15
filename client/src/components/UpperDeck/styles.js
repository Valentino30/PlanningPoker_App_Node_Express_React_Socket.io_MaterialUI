import { makeStyles } from "@material-ui/core/styles";

export const useUpperDeckStyles = makeStyles(() => ({
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
