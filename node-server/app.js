const express = require("express");
const connectToDB = require("./config/db");
const router = require("./router");
const cors = require('cors');

const port = 3000;

const app = express();

app.use(cors({
	origin: "*",
	methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
	preflightContinue: false,
	optionsSuccessStatus: 204
  }))
app.use(express.json());

app.use("/api", router);

app.listen(port, () => {
	console.log(`Server listening at port: ${port}`);
	connectToDB();
});
