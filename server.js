const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let latestScan = {
  timestamp: null,
  count: 0,
  networks: []
};

app.post("/update", (req, res) => {
  latestScan = req.body;
  res.json({ status: "ok" });
});

app.get("/latest", (req, res) => {
  res.json(latestScan);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log("Server running on port " + port));
