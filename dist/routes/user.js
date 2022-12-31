"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../controllers/user");
const router = require("express").Router();
router.post("/signup", user_1.signupUser);
exports.default = router;
