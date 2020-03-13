const express = require("express");
const routes = require("./routes");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");

const app = express(); 

const dotenv = require('dotenv');
dotenv.config();
 
// user:senha  /nomedabasededados
mongoose.connect(
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0-s9tj0.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
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
