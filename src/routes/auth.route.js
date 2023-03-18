import { Router } from "express";
const route = Router();

import { login } from "../controller/auth.controller.js"

route.post("/", login);

export default route;