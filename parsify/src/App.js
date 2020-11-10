import logo from "./logo.svg";
import { useState, useEffect } from "react";
import "./App.css";
import { Paper } from "@material-ui/core";
import Search from "./components/Search";
import { Pagination } from "@material-ui/lab";
import axios from "axios";

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
    searchItems: [],
  });

  useEffect(() => {
    console.log("we're going to win");
    animateBackground();
    axios.get("/load").then((res) => {
      console.log('success loading', res.data)
      setSearch({searchItems: res.data})
    });
  }, []);

  return (
    <div className="App" style={{ background: "rgba(1, 1, 1, 0" }}>
      <header>
        <h1>øøø</h1>
      </header>
      <Paper elevation={24} style={{ background: "rgba(1, 1, 1, 0" }}>
        <div className="App-view">
          <Search items={searchState.searchItems} />
        </div>
      </Paper>
    </div>
  );
}

export default App;
