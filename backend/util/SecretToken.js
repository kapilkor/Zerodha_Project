import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const TOKEN_KEY = (process.env.TOKEN_KEY || "dev_secret_key").trim();

if (!TOKEN_KEY) {
  throw new Error("TOKEN_KEY is missing. Set it in .env");
}

export const createSecretToken = (id) => {
  return jwt.sign({ id }, TOKEN_KEY, { expiresIn: "7d" });
};