import React from "react";
import Person from "./childs/Person";
import { Grid, Container } from "@material-ui/core";

function Persons({ classes, persons }) {
  return (
    <>
      <Container className={classes.cardGrid}>
        {persons?.length === 0 && <div>No Items Found</div>}
        <Grid container spacing={3}>
          {persons?.map?.((person) => (
            <Person
              key={person.id}
              person={person}
              city={person.address.city}
              classes={classes}
            />
          ))}
        </Grid>
      </Container>
    </>
  );
}

export default Persons;
