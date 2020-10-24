import logo from "./logo.svg";
import "./App.css";
import {TextField, Button} from "@material-ui/core";

function App() {
  return (
    <div className="App">
      <header><h1>Parsify</h1></header>
      <div className="App-view">
        <form noValidate autoComplete="off">
          <TextField id="standard-basic" label="Enter Song" style={{width: '50vw'}}/>
          <Button>Search</Button>
        </form>
      </div>
    </div>
  );
}

export default App;
