import { makeStyles } from "@material-ui/core/styles";

export const useRoomRouterStyles = makeStyles((theme) => ({
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
