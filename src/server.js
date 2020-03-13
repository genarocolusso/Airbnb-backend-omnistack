const express = require("express");
const routes = require("./routes");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");

const app = express();

// user:senha  /nomedabasededados
mongoose.connect(
  "mongodb+srv://mongouser:mongodatabasecolusso@cluster0-s9tj0.mongodb.net/omnistack9?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

app.use(cors());

app.use(express.json()); // express json
app.use("/files", express.static(path.resolve(__dirname, "..", "uploads"))); //arquivos static
app.use(routes); // usar as rotas

app.listen(3333);
