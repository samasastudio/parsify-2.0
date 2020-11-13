import React from "react";
import {
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";
import "./Search.css";

const Search = ({ items, onAnalyze }) => {
  const columns = [
    { field: "track", headerName: "Song Name", width: 300 },
    { field: "artists", headerName: "Artists", width: 300 },
    { field: "album", headerName: "Album", width: 300 },
    { field: "id", headerName: "UUID", width: 220, hide: true },
  ];
  return (
    <div style={{ padding: "50px", height: '100%' }}>
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
            height: "56px",
            width: "10vw",
            border: "1px #d9a362 solid",
          }}
        >
          Search
        </Button>
      </form>
      <div
        className="dataWrapper"
        style={{ height: 400, width: "100%", marginTop: "2%" }}
      >
        <DataGrid
          rows={items}
          columns={columns}
          pageSize={6}
          onRowClick={(cellParams) => {
            onAnalyze(cellParams);
          }}
        />
      </div>
    </div>
  );
};

export default Search;
