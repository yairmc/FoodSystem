import RouterApp from "./routes/router.routes.js";
import express from "express";
import bodyparser from "body-parser";
import cors from 'cors';

const app = express();

app.use(cors())
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.use("/", RouterApp);

export {app}