import express from "express";

import userController from "../controller/user.controller.js";
import { validID, validUser } from "../middlewares/global.middlewares.js";
import { authMiddleware } from "../middlewares/auth.middlewares.js";

const route = express.Router();

route.post('/', userController.create);

export default route;