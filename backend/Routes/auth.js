import express from "express";
import passport from "passport";
import "../config/passport.js";

import { Signup, Login } from "../Controllers/AuthController.js";
import { userVerification } from "../Middlewares/AuthMiddleware.js";
import UserModel from "../model/UserModel.js";
import { createSecretToken } from "../util/SecretToken.js";

const router = express.Router();

// -------------------
// Auth using Email/Password
// -------------------
router.post("/signup", Signup);
router.post("/login", Login);
router.get("/verify", userVerification);

// -------------------
// Google OAuth
// -------------------
// router.get(
//   "/auth/google",
//   passport.authenticate("google", {
//     scope: ["profile", "email"],
//   })
// );

// router.get(
//   "/auth/google/callback",
//   passport.authenticate("google", {
//     failureRedirect: "http://localhost:3001/login",
//   }),
//   async (req, res) => {
//     const user = await UserModel.findById(req.user);
//     const token = createSecretToken(user._id);
//     res.cookie("token", token, { httpOnly: false });
//     res.redirect("http://localhost:3000/");
//   }
// );

// -------------------
// GitHub OAuth
// -------------------
// router.get(
//   "/auth/github",
//   passport.authenticate("github", {
//     scope: ["user:email"],
//   })
// );

// router.get(
//   "/auth/github/callback",
//   passport.authenticate("github", {
//     failureRedirect: "http://localhost:3001/login",
//   }),
//   async (req, res) => {
//     const user = await UserModel.findById(req.user);
//     const token = createSecretToken(user._id);
//     res.cookie("token", token, { httpOnly: false });
//     res.redirect("http://localhost:3000/");
//   }
// );

export default router;
