 import dotenv from "dotenv";
 dotenv.config();

import jwt from "jsonwebtoken";
import UserModel from "../model/UserModel.js";

export const userVerification = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token)
      return res.json({ status: false, message: "No token found" });

    jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
      if (err) return res.json({ status: false });

      const user = await UserModel.findById(data.id);
      if (!user) return res.json({ status: false });

      return res.json({ status: true, user: user.username });
    });
  } catch (error) {
    res.json({ status: false });
  }
};
