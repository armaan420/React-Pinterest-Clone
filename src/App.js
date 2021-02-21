import "./App.css";
import Header from "./components/Header";
import PinBoard from "./components/PinBoard";
import unsplash from "./api/unsplash";
import { useState } from "react";

function App() {
  const [pins, setNewPins] = useState([]);

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
      <PinBoard pins={pins} />
    </div>
  );
}

export default App;
