import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDb from "./src/database/db.js";

dotenv.config();

const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
};

const app = express();

connectDb();

app.use(cors(corsOptions));
app.use(express.json());

app.use('/', (req, res) => {
    return res.send('Bem vindo(a) a Api Diário Web 1.0.')
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor conectado na porta: ${PORT}`);
})