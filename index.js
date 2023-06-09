import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDb from "./src/database/db.js";

import userRoute from "./src/routes/user.route.js";
import authRoute from "./src/routes/auth.route.js";

dotenv.config();

const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
};

const app = express();

connectDb();

app.use(cors(corsOptions));
app.use(express.json());


app.use("/user", userRoute);
app.use("/auth", authRoute);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor conectado na porta: ${PORT}`);
})