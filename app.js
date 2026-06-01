import express from "express";
import mongoose from "mongoose"
import dotenv from "dotenv"
import path from "path";
import cors from "cors"
import http from "http";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.join(__dirname, "./.env.development") });

import routes from "./routes/index.js"

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({origin: process.env.FRONTEND_URI,}))

app.use("/api", routes)

const server = http.createServer(app);

mongoose.connect(process.env.MONGO_URI).then(()=>{
    server.listen(process.env.PORT , ()=>{
    console.log(`Server running on ${process.env.PORT}`);
})
}).catch((err) => {
    console.log(err)
}
)