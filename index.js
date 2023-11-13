const express = require("express"),
  http = require("http");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const studentRouter = require("./routes/studentRouter");

const hostName = "localhost";
const port = 4000;

const app = express();
app.use(bodyParser.json());

app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));

app.use("/student", studentRouter);

const server = http.createServer(app);

server.listen(port, hostName, () => {
  console.log(`Server running at http://${hostName}:${port}/`);
});