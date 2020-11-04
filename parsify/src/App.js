import logo from "./logo.svg";
import "./App.css";
import { Paper } from "@material-ui/core";
import Search from './components/Search';
import { Pagination } from "@material-ui/lab";

function App() {
  return (
    <div className="App" style={{ background: "rgba(1, 1, 1, 0" }}>
      <header>
        <h1>øøø</h1>
      </header>
      <Paper elevation={24} style={{ background: "rgba(1, 1, 1, 0" }}>
        <div className="App-view">
          <Search/>
          <Pagination page={2} count={12} size="small" />
        </div>
      </Paper>
    </div>
  );
}

export default App;
