import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID hfSeuEYc22E52hSG14Nd4H8_SibZ4sceGh4_35qigzY",
  },
});
