import { TextField, Typography } from "@material-ui/core";

function NameField(props) {
  return (
    <>
      {props.edit ? (
        <TextField
          type="text"
          color="secondary"
          placeholder="Write a Name"
          value={props.value}
          onChange={props.onChange}
        />
      ) : (
        <Typography variant="h5">{props.name}</Typography>
      )}
    </>
  );
}

export default NameField;
