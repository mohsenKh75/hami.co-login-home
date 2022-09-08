import { AppBar, CssBaseline, Grid, Toolbar, Avatar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { logoutAction } from "../store/authSlice";

function Header({ classes }) {
  const dispatch = useDispatch();
  const { email } = useSelector((state) => state.auth);

  const logoutHandler = () => {
    dispatch(logoutAction());
  };

  return (
    <div>
      <CssBaseline />
      <AppBar position="relative" color="secondary">
        <Toolbar>
          <Grid
            container
            justifyContent="end"
            flexWrap="noWrap"
            alignItems="center"
          >
            <Grid item>
              <Grid container spacing={4} alignItems="center" sx={{ py: 1 }}>
                <Grid item xs={3}>
                  <button onClick={logoutHandler} className={classes.btn}>
                    Logout
                  </button>
                </Grid>
                <Grid item sx={{ mx: 2 }}>
                  <small>{email}</small>
                </Grid>
                <Grid item>
                  <Avatar
                    sx={{ width: 30, height: 30, bgcolor: "secondary", p: 3 }}
                  >
                    Pic
                  </Avatar>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
