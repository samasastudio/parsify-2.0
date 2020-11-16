import { useState } from "react";
import {
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";
import "./Search.css";
import axios from "axios";

const Search = ({ items, onAnalyze, onSearch, forSubmit }) => {
  const [textState, setText] = useState({ text: "" });
  const handleChange = (e) => {
    setText({ text: e.target.value });
  };

  const columns = [
    { field: "track", headerName: "Song Name", width: 300 },
    { field: "artists", headerName: "Artists", width: 300 },
    { field: "album", headerName: "Album", width: 300 },
    { field: "id", headerName: "UUID", width: 220, hide: true },
  ];
  return (
    <div style={{ padding: "50px", height: "100%" }}>
      <form noValidate autoComplete="off" onSubmit={(e) => forSubmit(e, textState)}>
        <TextField
          label="Enter Song"
          variant="outlined"
          style={{ width: "50vw", height: "50px" }}
          onChange={(e) => handleChange(e)}
        />
      </form>
      <div
        className="dataWrapper"
        style={{ height: 400, width: "100%", marginTop: "2%" }}
      >
        {items[0] === undefined ? (
          <DataGrid
            rows={items}
            columns={columns}
            pageSize={6}
            onRowClick={(cellParams) => {
              onAnalyze(cellParams);
            }}
            loading
          />
        ) : (
          <DataGrid
            rows={items}
            columns={columns}
            pageSize={6}
            onRowClick={(cellParams) => {
              onAnalyze(cellParams);
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Search;
