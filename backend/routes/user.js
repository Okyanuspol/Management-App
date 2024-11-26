import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "./models/User.js";

const router = express.Router();

const app = express();
app.use(express.json());


app.post("/register", async (req, res) => {
  const { username, password } = req.body;

  
});

export default router;