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
    title: "",
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
                parseInt(danceability * 100),
                parseInt(energy * 100),
                parseInt(instrumentalness * 100),
                parseInt(liveness * 100),
                parseInt(speechiness * 100),
                parseInt(valence * 100),
              ],
              borderColor: "rgba(1,1,1,0)",
              borderWidth: "10px",
              backgroundColor: [
                "rgba(217, 119, 191, 0.75)",
                "rgba(217, 163, 98, 0.75)",
                "rgba(217, 141, 98, 0.75)",
                "rgba(217, 96, 85, 0.75)",
                "rgba(217, 74, 74, 0.75)",
                "rgba(25, 141, 183, 0.75)",
              ],
            },
          ],
        };
        const options = {
          legend: { display: false },
          responsive: true,
          animation: { animateScale: true, animateRotate: true },
        };
        setChart({
          hidden: false,
          chartData: { data, options },
          title: res.data[0].track,
        });
      })
      .catch((err) => {
        console.log("analysis failed!", err);
      });
  };

  const onReset = () => {
    setChart({ hidden: true, chartData: {}, title: "" });
  };

  if (chartState.hidden) {
    return (
      <div className="App">
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
      <div className="chartContainer">
        <div className="titleContainer">
          {`Analysis: "${chartState.title}"`}
        </div>
        <div
          onClick={(e) => {
            onReset(e);
          }}
          className="resetContainer"
        >
          Reset
        </div>
        <div className="chartWrap rotate">
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
