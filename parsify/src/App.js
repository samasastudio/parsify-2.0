import logo from "./logo.svg";
import { useState, useEffect } from "react";
import "./App.css";
import { Paper, Button } from "@material-ui/core";
import Search from "./components/Search";
import axios from "axios";
import { Doughnut } from "react-chartjs-2";
import ApexCharts from "apexcharts";

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
    searching: false,
  });

  const [chartState, setChart] = useState({
    hidden: true,
    chartData: [],
    title: "",
  });

  useEffect(() => {
    console.log("we're going to win");
    animateBackground();
    getLoadItems()
  }, []);

  const getLoadItems = () => {
    axios.get("/load").then((res) => {
      console.log("success loading", res.data);
      setSearch({ searchItems: res.data });
      setChart({ hidden: true, chartData: {}, title: "" });
    });
  };

  const onAnalyze = (cellParams) => {
    console.log("FOR ANALYZE", cellParams.rowModel);
    axios
      .get(
        `/analyze/${cellParams.rowModel.id}/${cellParams.rowModel.data.track}/${cellParams.rowModel.data.artists}/${cellParams.rowModel.data.album}`
      )
      .then((res) => {
        console.log("RESPONSE FROM ANALYZE", res.data);
        const {
          danceability,
          energy,
          instrumentalness,
          liveness,
          acousticness,
          valence,
        } = res.data[0];

        setChart({
          hidden: false,
          title: res.data[0].track,
          danceability: parseInt(danceability * 100),
          energy: parseInt(energy * 100),
          instrumentalness: parseInt(instrumentalness * 100),
          liveness: parseInt(liveness * 100),
          acousticness: parseInt(acousticness * 100),
          valence: parseInt(valence * 100),
        });

        var options = {
          chart: {
            width: "70%",
            type: "radialBar",
            forColor: "#010101",
          },
          colors: [
            "rgba(217, 119, 191, 1)",
            "rgba(217, 163, 98, 1)",
            "rgba(217, 141, 98, 1)",
            "rgba(217, 96, 85, 1)",
            "rgba(217, 74, 74, 1)",
            "rgba(25, 141, 183, 1)",
          ],
          series: [
            parseInt(danceability * 100),
            parseInt(energy * 100),
            parseInt(instrumentalness * 100),
            parseInt(liveness * 100),
            parseInt(acousticness * 100),
            parseInt(valence * 100),
          ],
          plotOptions: {
            radialBar: {
              track: {
                show: false,
              },
            },
          },
        };

        new ApexCharts(document.querySelector("#apexWrap"), options).render();
      })
      .catch((err) => {
        console.log("analysis failed!", err);
      });
  };

  const onReset = () => {
    getLoadItems();
  };

  const handleSubmit = (e, textState) => {
    e.preventDefault();
    const { text } = textState;
    setSearch({ searching: true, searchItems: [] });
    axios
      .get(`/search/${text}`)
      .then((res) => {
        console.log("RESPONSE FROM SUBMIT", res.data);
        setSearch({ searchItems: res.data });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  if (chartState.hidden) {
    return (
      <div className="App">
        <header>
          <h1>parsify</h1>
        </header>
        <Paper elevation={24} style={{ background: "rgba(1, 1, 1, 0" }}>
          <div className="App-view">
            {!searchState.searching ? (
              <Search
                items={searchState.searchItems}
                onAnalyze={onAnalyze}
                onSearch={setSearch}
                forSubmit={handleSubmit}
              />
            ) : null}
          </div>
        </Paper>
      </div>
    );
  } else {
    return (
      <div className="chartContainer">
        <Paper elevation={10} className="titleContainer">
          <p
            className="stats"
            style={{ color: "#ffffff" }}
          >{`"${chartState.title}"`}</p>
          <p
            className="stats"
            style={{ color: "rgba(217, 119, 191, 1)" }}
          >{`Danceability: ${chartState.danceability}`}</p>
          <p
            className="stats"
            style={{ color: "rgba(217, 163, 98, 1)" }}
          >{`Energy: ${chartState.energy}`}</p>
          <p
            className="stats"
            style={{ color: "rgba(217, 141, 98, 1)" }}
          >{`Instrumentalness: ${chartState.instrumentalness}`}</p>
          <p
            className="stats"
            style={{ color: "rgba(217, 96, 85, 1)" }}
          >{`Liveness: ${chartState.liveness}`}</p>
          <p
            className="stats"
            style={{ color: "rgba(217, 74, 74, 1)" }}
          >{`Acousticness: ${chartState.acousticness}`}</p>
          <p
            className="stats"
            style={{ color: "rgba(25, 141, 183, 1)" }}
          >{`Valence: ${chartState.valence}`}</p>
        </Paper>
        <div
          onClick={(e) => {
            onReset(e);
          }}
          className="resetContainer"
        >
          <Button
            style={{
              color: "rgba(217, 74, 74, 1)",
              border: "1px #010101 solid",
              backgroundColor: "rgba(1,1,1,.9)",
              boxShadow: "2px 2px 8px rgba(1,1,1,.5)",
            }}
          >
            Reset
          </Button>
        </div>
        <div className="chartWrap rotate" id="apexWrap" />
      </div>
    );
  }
}

export default App;
