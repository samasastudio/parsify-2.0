import logo from "./logo.svg";
import { useState, useEffect } from "react";
import "./App.css";
import {
  Paper,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  CircularProgress,
} from "@material-ui/core";
import Search from "./components/Search";
import axios from "axios";
import ApexCharts from "apexcharts";
import Skeleton from "@material-ui/lab/Skeleton";

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
  const [modalOpen, setModal] = useState(false);

  useEffect(() => {
    animateBackground();
    getLoadItems();
  }, []);

  const getLoadItems = () => {
    axios.get(`${window.location.href}load`).then((res) => {
      setSearch({ searchItems: res.data, searching: false });
      setChart({ hidden: true, chartData: {}, title: "" });
    });
  };

  const onAnalyze = (cellParams) => {
    axios
      .get(
        `${window.location.href}analyze/${cellParams.row.id}/${cellParams.row.track}/${cellParams.row.artists}/${cellParams.row.album}`
      )
      .then((res) => {
        const keys = [
          "C",
          "C#/Db",
          "D",
          "D#/Eb",
          "E",
          "F",
          "F#/Gb",
          "G",
          "G#/Ab",
          "A",
          "A#/Bb",
          "B",
        ];
        const {
          danceability,
          energy,
          instrumentalness,
          speechiness,
          liveness,
          acousticness,
          valence,
          key,
          mode,
          tempo,
        } = res.data[0];

        setChart({
          hidden: false,
          title: res.data[0].track,
          danceability: parseInt(danceability * 100),
          energy: parseInt(energy * 100),
          instrumentalness: parseInt(instrumentalness * 100),
          speechiness: parseInt(speechiness * 100),
          liveness: parseInt(liveness * 100),
          acousticness: parseInt(acousticness * 100),
          valence: parseInt(valence * 100),
          key: `${keys[key]} ${mode > 0 ? "Major" : "Minor"}`,
          tempo: `${Math.floor(tempo)}`,
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
            "#58E899",
            "rgba(25, 141, 183, 1)",
          ],
          series: [
            parseInt(danceability * 100),
            parseInt(energy * 100),
            parseInt(instrumentalness * 100),
            parseInt(speechiness * 100),
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
    if (!text) {
      setSearch({ searching: true, searchItems: [] });
      return getLoadItems();
    }
    setSearch({ searching: true, searchItems: [] });
    axios
      .get(`${window.location.href}search/${text}`)
      .then((res) => {
        setSearch({ searchItems: res.data });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleModal = (bool) => {
    setModal(bool);
  };

  if (chartState.hidden) {
    return (
      <div className="App">
        <header>
          <h1>IOX</h1>
        </header>
        <Paper elevation={24} style={{ background: "rgba(1, 1, 1, 0" }}>
          <div className="App-view">
            {!searchState.searching ? (
              <Search
                items={searchState.searchItems}
                onAnalyze={onAnalyze}
                onSearch={setSearch}
                forSubmit={handleSubmit}
                isSearching={searchState.searching}
              />
            ) : (
              <aside>
                <p>loading...</p>
                <CircularProgress />
              </aside>
            )}
          </div>
        </Paper>
      </div>
    );
  } else {
    return (
      <div className="chartContainer">
        <Paper elevation={10} className="titleContainer">
          <p className="stats" style={{ color: "#fff" }}>
            {`Key: ${chartState.key}`}
          </p>
          <p className="stats" style={{ color: "#fff" }}>
            {`BPM: ${chartState.tempo}`}
          </p>
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
          >{`Speechiness: ${chartState.speechiness}`}</p>
          <p
            className="stats"
            style={{ color: "rgba(217, 74, 74, 1)" }}
          >{`Liveness: ${chartState.liveness}`}</p>
          <p
            className="stats"
            style={{ color: "#58E899" }}
          >{`Acousticness: ${chartState.acousticness}`}</p>
          <p
            className="stats"
            style={{ color: "rgba(25, 141, 183, 1)" }}
          >{`Valence: ${chartState.valence}`}</p>
        </Paper>
        <div className="resetContainer">
          <Button
            onClick={() => {
              handleModal(true);
            }}
            style={{
              color: "rgba(217, 163, 98, 1)",
              border: "1px #010101 solid",
              backgroundColor: "rgba(1,1,1,.9)",
              boxShadow: "2px 2px 8px rgba(1,1,1,.5)",
            }}
          >
            Legend
          </Button>
          <Button
            onClick={(e) => {
              onReset(e);
            }}
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
        <Dialog
          onClose={() => {
            handleModal(false);
          }}
          onClick={() => {
            handleModal(false);
          }}
          aria-labelledby="simple-dialog-title"
          open={modalOpen}
        >
          <div style={{ backgroundColor: "#010101", padding: "25px" }}>
            <DialogTitle id="simple-dialog-title">
              Feature Definitions
            </DialogTitle>
            <DialogContent>
              Danceability describes how suitable a track is for dancing based
              on a combination of musical elements including tempo, rhythm
              stability, beat strength, and overall regularity.
            </DialogContent>
            <DialogContent>
              Energy represents a perceptual measure of intensity and activity.
              Typically, energetic tracks feel fast, loud, and noisy.
            </DialogContent>
            <DialogContent>
              Instrumentalness predicts whether a track contains no vocals.
              “Ooh” and “aah” sounds are treated as instrumental in this
              context. Rap or spoken word tracks are clearly “vocal”.
            </DialogContent>
            <DialogContent>
              Speechiness detects the presence of spoken words in a track. The
              more exclusively speech-like the recording (e.g. talk show, audio
              book, poetry), the closer to 100 the attribute value.
            </DialogContent>
            <DialogContent>
              Liveness detects the presence of an audience in the recording.
              Higher liveness values represent an increased probability that the
              track was performed live.
            </DialogContent>
            <DialogContent>
              Acousticness is A confidence measure of whether the track is
              acoustic.
            </DialogContent>
            <DialogContent>
              Valence is a measure describing the musical positiveness conveyed
              by a track. Tracks with high valence sound more positive (e.g.
              happy, cheerful, euphoric), while tracks with low valence sound
              more negative (e.g. sad, depressed, angry).
            </DialogContent>
          </div>
        </Dialog>
        <div class="songTitle">
          <p
            className="stats"
            style={{ color: "#ffffff", width: "100%", textAlign: "center" }}
          >{`"${chartState.title}"`}</p>
        </div>
        <div className="chartWrap rotate" id="apexWrap" />
      </div>
    );
  }
}

export default App;
