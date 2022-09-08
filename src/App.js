import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import useStyles from "./customStyles/useStyles";

function App() {
  const classes = useStyles();
  return (
    <>
      <Router>
        <div>
          <Header classes={classes} />
          <Routes>
            <Route path="/" element={<Home classes={classes} />} />
            <Route path="/login" element={<Login classes={classes} />} />
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
