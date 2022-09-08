import React, { useEffect, useState } from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  Divider,
  TextField,
} from "@material-ui/core";
import axios from "axios";
import { useDispatch } from "react-redux";
import { updateLocally } from "../../store/personsSlice";
import { INFOS_URL } from "../../services/api";
import Modal from "../Modal";

function Person({ classes, person, city }) {
  const [edit, setEdit] = useState({
    name: person.name,
    userName: person.username,
    email: person.email,
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => setIsModalOpen(false);
  const openModal = () => setIsModalOpen(true);

  const dispatch = useDispatch();

  useEffect(() => {
    setEdit({
      name: person.name,
      userName: person.username,
      email: person.email,
    });
  }, [person.username, person.name, person.email]);

  const inputHandler = (e) => {
    setEdit((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
  };
  const submitHandler = () => {
    axios
      .put(INFOS_URL + `/${person.id}`, {
        ...edit,
        id: person.id,
      })
      .then((res) => {
        const { id, name, userName, email } = res?.data || {};
        setEdit({ ...edit });
        dispatch(
          updateLocally({
            id: id,
            name: name,
            username: userName,
            email: email,
          })
        );
        closeModal();
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <>
      <Grid item className={classes.grid}>
        <Card className={classes.card}>
          <CardContent className={classes.cardContent}>
            <Typography variant="h5">{person.name}</Typography>

            <Divider className={classes.divide} />

            <Typography
              variant="h6"
              className={classes.infos}
              color="secondary"
            >
              Username:{" "}
              <Typography display="inline" color="textSecondary">
                {person.username}
              </Typography>
            </Typography>
            <Typography
              variant="h6"
              className={classes.infos}
              color="secondary"
            >
              Email:{" "}
              <Typography display="inline" color="textSecondary">
                {person.email}
              </Typography>
            </Typography>
          </CardContent>
          <CardActions>
            <Button onClick={openModal}>Edit</Button>
          </CardActions>
        </Card>
      </Grid>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div>
          <TextField
            type="text"
            color="secondary"
            placeholder="Write a Name"
            value={edit.name}
            onChange={inputHandler}
            name="name"
            style={{ margin: "10px 0" }}
          />

          <TextField
            type="text"
            color="secondary"
            placeholder="Write a Name"
            value={edit.userName}
            onChange={inputHandler}
            name="userName"
            style={{ margin: "10px 0" }}
          />

          <TextField
            type="text"
            color="secondary"
            placeholder="Write a Name"
            value={edit.email}
            onChange={inputHandler}
            name="email"
            style={{ margin: "10px 0" }}
          />

          <div>
            <Button
              onClick={submitHandler}
              color="primary"
              variant="contained"
              style={{ marginRight: "10px" }}
            >
              Edit
            </Button>
            <Button onClick={closeModal}>Cancel</Button>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default Person;
//
