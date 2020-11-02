import logo from "./logo.svg";
import "./App.css";
import {TextField, Button, List, ListItem, ListItemText, Paper} from "@material-ui/core";
import {FixedSizeList} from 'react-window';

function App() {
  return (
    <div className="App">
      <header><h1>øøø</h1></header>
      <Paper elevation={24}>
      <div className="App-view">
        <form noValidate autoComplete="off">
          <TextField label="Enter Song" variant="outlined" style={{width: '50vw', height: '50px'}}/>
          <Button style={{marginLeft: '10px',marginBottom: '10px', height: '50px', border: '1px #d9a362 solid'}}>Search</Button>
        </form>
        <List style={{width: '53vw'}}>
          <ListItem style={{width: '53vw'}} button><ListItemText>Hello</ListItemText></ListItem>
          <ListItem style={{width: '53vw'}} button><ListItemText>Hello</ListItemText></ListItem>
          <ListItem style={{width: '53vw'}} button><ListItemText>Hello</ListItemText></ListItem>
          <ListItem style={{width: '53vw'}} button><ListItemText>Hello</ListItemText></ListItem>
          <ListItem style={{width: '53vw'}} button><ListItemText>Hello</ListItemText></ListItem>
          <ListItem style={{width: '53vw'}} button><ListItemText>Hello</ListItemText></ListItem>
          <ListItem style={{width: '53vw'}} button><ListItemText>Hello</ListItemText></ListItem>
          <ListItem style={{width: '53vw'}} button><ListItemText>Hello</ListItemText></ListItem>
          <ListItem style={{width: '53vw'}} button><ListItemText>Hello</ListItemText></ListItem>
          <ListItem style={{width: '53vw'}} button><ListItemText>Hello</ListItemText></ListItem>
          <ListItem style={{width: '53vw'}} button><ListItemText>Hello</ListItemText></ListItem>
          <ListItem style={{width: '53vw'}} button><ListItemText>Hello</ListItemText></ListItem>
          <ListItem style={{width: '53vw'}} button><ListItemText>Hello</ListItemText></ListItem>
          <ListItem style={{width: '53vw'}} button><ListItemText>Hello</ListItemText></ListItem>
          <ListItem style={{width: '53vw'}} button><ListItemText>Hello</ListItemText></ListItem>
          <ListItem style={{width: '53vw'}} button><ListItemText>Hello</ListItemText></ListItem>
          <ListItem style={{width: '53vw'}} button><ListItemText>Hello</ListItemText></ListItem>
          <ListItem style={{width: '53vw'}} button><ListItemText>Hello</ListItemText></ListItem>
          <ListItem style={{width: '53vw'}} button><ListItemText>Hello</ListItemText></ListItem>
          <ListItem style={{width: '53vw'}} button><ListItemText>Hello</ListItemText></ListItem>
          <ListItem style={{width: '53vw'}} button><ListItemText>Hello</ListItemText></ListItem>
          <ListItem style={{width: '53vw'}} button><ListItemText>Hello</ListItemText></ListItem>
          <ListItem style={{width: '53vw'}} button><ListItemText>Hello</ListItemText></ListItem>
          <ListItem style={{width: '53vw'}} button><ListItemText>Hello</ListItemText></ListItem>
          <ListItem style={{width: '53vw'}} button><ListItemText>Hello</ListItemText></ListItem>
        </List>
      </div>
      </Paper>
    </div>
  );
}

export default App;
