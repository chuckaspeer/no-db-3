const express = require("express");
const { json } = require("body-parser");
const wc = require("./controllers/weatherCtrl");
const axios = require("axios");

const app = express();
app.use(json());

app.get("/api/weather/:city", wc.getWeather);

app.post("/api/weather", wc.saveWeather);

app.delete("/api/weather/:id", wc.deleteWeather);

app.get("/api/getTitle", wc.getTitle);

app.get("/api/getArray", wc.getArray);

app.put("/api/updateArray/:id", wc.updateArray);

const port = 3007;
app.listen(port, () => {
  console.log(`Server listening on port ${port}.`);
});
