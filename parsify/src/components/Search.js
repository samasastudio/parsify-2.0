import React from "react";
import {
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import { Pagination } from "@material-ui/lab";

const Search = ({ items }) => {
  return (
    <div>
      <form noValidate autoComplete="off">
        <TextField
          label="Enter Song"
          variant="outlined"
          style={{ width: "50vw", height: "50px" }}
        />
        <Button
          style={{
            marginLeft: "10px",
            marginBottom: "10px",
            height: "50px",
            width: "10vw",
            border: "1px #d9a362 solid",
          }}
        >
          Search
        </Button>
      </form>
      <List style={{ width: "60vw", float: "left" }}>
        {items.map((item) => {
          return (
            <ListItem style={{ width: "60vw" }} button>
              <ListItemText>{item}</ListItemText>
            </ListItem>
          );
        })}
      </List>
    </div>
  );
};

export default Search;
