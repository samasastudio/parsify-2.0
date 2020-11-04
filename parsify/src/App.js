import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import { Paper } from "@material-ui/core";
import Search from "./components/Search";
import { Pagination } from "@material-ui/lab";

function App() {

  const [state, setState] = useState({
    searchItems: [
      '"NBD" by Teen Daze',
      '"Oakmoss" by Bibio',
      '"Blue Comanche" by Westerman',
      '"Wistful (Fata Morgana) by Baths',
      '"Runner" by Tennis',
      '"You Lost Me There" by George Clinton',
      '"What Did He Say" by Nite Jewel',
    ],
  });

  return (
    <div className="App" style={{ background: "rgba(1, 1, 1, 0" }}>
      <header>
        <h1>øøø</h1>
      </header>
      <Paper elevation={24} style={{ background: "rgba(1, 1, 1, 0" }}>
        <div className="App-view">
          <Search items={state.searchItems}/>
          <Pagination page={2} count={12} size="small" />
        </div>
      </Paper>
    </div>
  );
}

export default App;
