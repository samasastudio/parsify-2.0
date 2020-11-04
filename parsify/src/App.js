import logo from "./logo.svg";
import "./App.css";
import {
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  Paper,
  Grid
} from "@material-ui/core";
import { FixedSizeList } from "react-window";
import { Pagination } from "@material-ui/lab";

function App() {
  return (
    <div className="App">
      <header>
        <h1>øøø</h1>
      </header>
      <Paper elevation={24}>
        <div className="App-view">
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
          <List style={{ width: "60vw", float: 'left' }}>
            <ListItem style={{ width: "60vw" }} button>
              <ListItemText>"NBD" by Teen Daze</ListItemText>
            </ListItem>
            <ListItem style={{ width: "60vw" }} button>
              <ListItemText>"Oakmoss" by Bibio</ListItemText>
            </ListItem>
            <ListItem style={{ width: "60vw" }} button>
              <ListItemText>"Blue Comanche" by Westerman</ListItemText>
            </ListItem>
            <ListItem style={{ width: "60vw" }} button>
              <ListItemText>"Wistful (Fata Morgana) by Baths</ListItemText>
            </ListItem>
            <ListItem style={{ width: "60vw" }} button>
              <ListItemText>"Runner" by Tennis</ListItemText>
            </ListItem>
            <ListItem style={{ width: "60vw" }} button>
              <ListItemText>"You Lost Me There" by George Clinton</ListItemText>
            </ListItem>
            <ListItem style={{ width: "60vw" }} button>
              <ListItemText>"What Did He Say" by Nite Jewel</ListItemText>
            </ListItem>
          </List>
          <Pagination page={2} count={12} size="small"/>
        </div>
      </Paper>
    </div>
  );
}

export default App;
