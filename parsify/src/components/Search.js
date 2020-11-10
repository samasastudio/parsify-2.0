import React from "react";
import {
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";

// const Search = ({ items }) => {
//   return (
//     <div>
//       <form noValidate autoComplete="off">
//         <TextField
//           label="Enter Song"
//           variant="outlined"
//           style={{ width: "50vw", height: "50px" }}
//         />
//         <Button
//           style={{
//             marginLeft: "10px",
//             marginBottom: "10px",
//             height: "50px",
//             width: "10vw",
//             border: "1px #d9a362 solid",
//           }}
//         >
//           Search
//         </Button>
//       </form>
//       <List style={{ width: "60vw", float: "left" }}>
//         {items.map((item) => {
//           return (
//             <ListItem style={{ width: "60vw" }} button>
//               <ListItemText>{`${item.track} by ${item.artists}`}</ListItemText>
//             </ListItem>
//           );
//         })}
//       </List>
//     </div>
//   );
// };

const Search = ({ items }) => {
  const columns = [
    {field: 'id', headerName: 'UUID', width: 220},
    {field: 'track', headerName: 'Song Name', width: 298},
    {field: 'artists', headerName: 'Artists', width: 250},
    {field: 'album', headerName: 'Album', width: 200}
  ];
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
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={items}
          columns={columns}
          pageSize={5}
        />
      </div>
    </div>
  );
};

export default Search;
