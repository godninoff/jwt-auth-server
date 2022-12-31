import { signupUser } from "../controllers/users";

const router = require("express").Router();

router.post("/signup", signupUser);

export default router;
