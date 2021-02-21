import "./App.css";
import Header from "./components/Header";
import PinBoard from "./components/PinBoard";
import unsplash from "./api/unsplash";
import { useState, useEffect } from "react";
import Loader from "./components/Loader";

function App() {
  const [pins, setNewPins] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchPics();
    setLoading(false);
    function fetchPics() {
      const toGet = [];
      let loadedPins = [];

      const loadingPins = [
        "bro",
        "card",
        "car",
        "black",
        "night",
        "music",
        "play",
        "life",
      ];

      loadingPins.forEach((pin) => {
        console.log(pin);
        // onSearchSubmit(pin);

        toGet.push(
          getImages(pin).then((res) => {
            let results = res.data.results;

            loadedPins = loadedPins.concat(results);

            loadedPins.sort((a, b) => 0.5 - Math.random());
          })
        );
      });
      Promise.all(toGet).then(() => {
        setNewPins(loadedPins);
      });
    }
  }, []);

  const getImages = (search) => {
    return unsplash.get("https://api.unsplash.com/search/photos", {
      params: {
        query: search,
      },
    });
  };

  const onSearchSubmit = (search) => {
    getImages(search).then((res) => {
      let result = res.data.results;

      let newPins = [...result, ...pins];

      newPins.sort((a, b) => 0.5 - Math.random());

      setNewPins(newPins);
    });
  };

  return (
    <div className="App">
      <Header onSubmit={onSearchSubmit} />
      {loading ? <Loader /> : <PinBoard pins={pins} />}
    </div>
  );
}

export default App;
