import RouterApp from "./routes/router.routes.js";
import express from "express";
const app = express();

app.use("/", RouterApp);

const PORT = 3000;
const HOST = "localhost";

app.listen(PORT, HOST, () => {
    console.log("Server running");
})