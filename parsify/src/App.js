import logo from "./logo.svg";
import "./App.css";
import {TextField, Button} from "@material-ui/core";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Parsify</h1>
        <form noValidate autoComplete="off">
          <TextField id="standard-basic" label="Standard" style={{width: '50vw'}}/>
          <Button>Search</Button>
        </form>
      </header>
    </div>
  );
}

export default App;
