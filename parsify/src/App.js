import logo from "./logo.svg";
import { useState, useEffect } from "react";
import "./App.css";
import { Paper } from "@material-ui/core";
import Search from "./components/Search";
import { Pagination } from "@material-ui/lab";
import axios from "axios";
import { Doughnut } from "react-chartjs-2";

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

  const [chartState, setChart] = useState({
    hidden: true,
    chartData: [],
  });

  useEffect(() => {
    console.log("we're going to win");
    animateBackground();
    axios.get("/load").then((res) => {
      console.log("success loading", res.data);
      setSearch({ searchItems: res.data });
    });
  }, []);

  const onAnalyze = (cellParams) => {
    console.log(cellParams.rowModel.id);
    axios
      .get(`/analyze/${cellParams.rowModel.id}`)
      .then((res) => {
        console.log("response from analyze!", res);
        const {
          danceability,
          energy,
          instrumentalness,
          liveness,
          speechiness,
          valence,
        } = res.data[0];
        const data = {
          labels: [
            "danceability",
            "energy",
            "instrumentalness",
            "liveness",
            "speechiness",
            "valence",
          ],
          datasets: [
            {
              data: [
                danceability,
                energy,
                instrumentalness,
                liveness,
                speechiness,
                valence,
              ],
              borderColor: "rgba(1, 1, 1, 1)",
              weight: 6,
              backgroundColor: [
                "rgba(217, 119, 191, 0.9)",
                "rgba(217, 163, 98, 0.9)",
                "rgba(217, 141, 98, 0.9)",
                "rgba(217, 96, 85, 0.9)",
                "rgba(217, 74, 74, 0.9)",
                "rgba(25, 141, 183, 0.9)",
              ],
            },
          ],
        };
        const options = { legend: { display: false } };
        setChart({
          responsive: true,
          hidden: false,
          chartData: { data, options },
        });
      })
      .catch((err) => {
        console.log("analysis failed!", err);
      });
  };

  if (chartState.hidden) {
    return (
      <div className="App" style={{ background: "rgba(1, 1, 1, 0" }}>
        <header>
          <h1>øøø</h1>
        </header>
        <Paper elevation={24} style={{ background: "rgba(1, 1, 1, 0" }}>
          <div className="App-view">
            <Search items={searchState.searchItems} onAnalyze={onAnalyze} />
          </div>
        </Paper>
      </div>
    );
  } else {
    return (
      <div
        style={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="chartWrap">
          <Doughnut
            data={chartState.chartData.data}
            options={chartState.chartData.options}
          />
        </div>
      </div>
    );
  }
}

export default App;
