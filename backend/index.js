import express from "express";
import db from "./config/db.js";
import router from "./router/urlShortenerRouter.js";
import bodyParser from "body-parser";

import cors from "cors";

const app = express();
db()
app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:3000' }));

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api', router)


app.listen(4000, () => console.log(`Server running on port 4000`))