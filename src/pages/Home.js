import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import Persons from "../components/Persons";
import Pagination from "../components/Pagination";
import SearchBar from "../components/SearchBar";
import { useDispatch, useSelector } from "react-redux";
import { getPersons } from "../store/personsSlice";
import { useNavigate } from "react-router-dom";
import useDebounce from "../components/hooks/useDebounce";

function Home({ classes }) {
  const navigate = useNavigate();

  const [searchName, setSearchName] = useState("");
  const debouncedValue = useDebounce(searchName, 500);
  const [searchData, setSearchData] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();
  const { data: persons } = useSelector((state) => state.infos);
  const { isLoggedIn } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!isLoggedIn) navigate("/login");
  }, [isLoggedIn]);

  const onChange = (e) => {
    /* let foundItems = persons?.filter((person) =>
      person.name.toLowerCase().includes(searchName)
    ); */

    setSearchName(e.target.value);
  };
  const getNames = (search) => {
    let foundItems = persons?.filter((person) =>
      person.name.toLowerCase().includes(search)
    );
    setSearchData(search ? foundItems : []);
  };
  useEffect(() => {
    if (debouncedValue) {
      setIsSearching(true);
      getNames(debouncedValue).then((result) => {
        setIsSearching(false);
        setSearchData(result);
      });
    } else {
      setSearchData([]);
    }
  }, [debouncedValue]);
  useEffect(() => {
    if (!persons) {
      dispatch(getPersons());
    }
  }, []);

  const handlePagination = (event, value) => {
    setPage(value);
    // Note: There is no pagination for users in https://jsonplaceholder.typicode.com/
    // This has been added only for demonstration purpose
  };

  return (
    <>
      <Grid container justifyContent="center">
        <Grid item>
          <SearchBar value={searchName} onChange={onChange} classes={classes} />
          <div style={{ textAlign: "center", marginTop: "10px" }}>
            {`Results: ${
              searchData.length > 0 || searchName
                ? searchData?.length
                : persons?.length
            }`}
          </div>
        </Grid>
      </Grid>

      <Grid container flexDirection="column" alignItems="center">
        <Grid item>
          <main>
            <Persons
              persons={
                searchData.length > 0 || searchName ? searchData : persons
              }
              classes={classes}
            />
          </main>
        </Grid>
        <Grid item>
          <footer className={classes.footer}>
            <Pagination count={3} page={page} handleChange={handlePagination} />
          </footer>
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
