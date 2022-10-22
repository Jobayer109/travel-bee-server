const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());
app.get("/");
app.get("/", (req, res) => {
  res.send("Hello, I'm express !!");
});

app.listen(port, () => {
  console.log(`Example app listening on port: ${port}`);
});
const hotels = require("./data/hotels.json");

app.get("/hotels/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const allHotels = hotels.find((hotel) => hotel.id === id);
  res.send(allHotels);
});

app.get("/hotels", (req, res) => {
  res.send(hotels);
});
