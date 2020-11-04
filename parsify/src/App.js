import logo from "./logo.svg";
import { useState, useEffect } from "react";
import "./App.css";
import { Paper } from "@material-ui/core";
import Search from "./components/Search";
import { Pagination } from "@material-ui/lab";

function App() {
  const animateBackground = () => {
    let angle = 0;

    const changeBackground = () => {
      angle++;
      document.body.style.background = `linear-gradient(${angle}deg, rgba(217, 119, 191, 1) 0%, rgba(217, 163, 98, 1) 33%, rgba(217, 141, 98, 1) 60%, rgba(217, 96, 85, 1) 100%, rgba(217, 74, 74, 1) 100%)`;
      requestAnimationFrame(changeBackground);
    };

    changeBackground();
  };

  const [searchState, setSearch] = useState({
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

  useEffect(() => {
    console.log("we're going to win");
    animateBackground();
  });

  return (
    <div className="App" style={{ background: "rgba(1, 1, 1, 0" }}>
      <header>
        <h1>øøø</h1>
      </header>
      <Paper elevation={24} style={{ background: "rgba(1, 1, 1, 0" }}>
        <div className="App-view">
          <Search items={searchState.searchItems} />
          <Pagination page={2} count={12} size="small" />
        </div>
      </Paper>
    </div>
  );
}

export default App;
