import {config} from "dotenv";
config({path: ".env"});
import {app} from "./main.js";

const port = process.env.SERVER_PORT || 3000;
const host = process.env.SERVER_HOST || "localhost";

app.listen(port, host, () => {
   console.log(`Server running in ${host}:${port}`);
})


