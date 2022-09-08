import Paper from "@mui/material/Paper";
import SearchIcon from "@mui/icons-material/Search";
import { InputBase, IconButton } from "@mui/material";

export default function SearchBar({ value, onChange, classes }) {
  return (
    <Paper component="form" sx={{ mt: 2 }}>
      <InputBase
        required
        value={value}
        onChange={onChange}
        id="name"
        label="Search a Name"
        name="name"
        autoComplete="name"
        color="secondary"
        variant="standard"
        className={classes?.textField}
      />
      <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
