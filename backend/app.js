const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Routes
const routes = require("./routes/router");
app.use("/api", routes);


// db connection
const conn = require('./db/conn');
try {
  conn
    // .sync({ force: true })
    // .then(() => {
    //   console.log("Dropou e re-sync DB.");
    // })
    .sync()
  // .then(() => {
  //   app.listen(3000)
  //   console.log("App rodando na porta 3000")
  // })
}
catch (err) { console.log("Não conectou ao DB: " + err.message) };

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}.`);
});