const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

require("dotenv").config();

// CONNECT TO DB
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log(`Connected to DB...✅`))
  .catch(() => console.log(`Couldn't connect to DB...❌`));

// MIDDLEWARES
app.use(cors());
app.use(express.json());

// ROUTES

app.use("/api/games", require("./routes/game"));
app.use("/api/comments", require("./routes/comment"));
app.use("/api/auth", require("./routes/user"));
app.use("/api/platforms", require("./routes/platform"));
app.use("/api/reviews", require("./routes/review"));

// PORT AND LISTEN
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("Server running...🔥");
});
