import express from "express";
import "./db/mongoose.js";

import routes from "./router";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use("/api", routes);

app.listen(port, () => {
  console.log("Server run in port: " + port);
});
