import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  app: {
    display: "flex",
    flexDirection: "column",

    alignItems: "center",
  },
  navigator: {
    textDecoration: "none",
    background: theme.palette.background.paper,
    color: "#d78df7",
    padding: "4px 10px",
    borderRadius: "15px",
  },
  btn: {
    background: theme.palette.background.paper,
    color: "#d78df7",
    padding: "5px 13px",
    borderRadius: "15px",
    cursor: "pointer",
    border: "none",
  },
  avatar: {
    fontSize: "40px",
  },
  textField: {
    maxWidth: "350px",
    display: "flex",
    alignItems: "center",
    marginTop: "7px",
    padding: "2px 4px",
    outline: "none",
  },
  cardGrid: {
    padding: "20px",
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardContent: {
    flexGrow: "1",
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: "50px 0",
  },
  divide: {
    margin: "4px 4px",
  },
  infos: {
    marginTop: "3px",
  },
  grid: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    width: "300px",
  },
}));

export default useStyles;
