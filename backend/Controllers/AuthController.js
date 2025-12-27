import UserModel from "../model/UserModel.js";
import { createSecretToken } from "../util/SecretToken.js";
import bcrypt from "bcryptjs";

export const Signup = async (req, res, next) => {
  try {
    const { email, password, username, createdAt } = req.body;

    // Check if user already exists
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ 
        success: false,
        message: "User already exists with this email" 
      });
    }

    // Create new user
    const user = await UserModel.create({ 
      email, 
      password, 
      username, 
      createdAt 
    });

    // Create token
    const token = createSecretToken(user._id);

    // Set cookie
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
      maxAge: 3600000, // 1 hour
    });

    res.status(201).json({ 
      success: true,
      message: "User signed up successfully", 
      user: {
        id: user._id,
        email: user.email,
        username: user.username
      },
      token
    });

  } catch (error) {
    console.error("Signup error:", error);
    res.status(500).json({ 
      success: false,
      message: error.message || "Signup failed" 
    });
  }
};

export const Login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ 
        success: false,
        message: "All fields are required" 
      });
    }

    // Find user
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(401).json({ 
        success: false,
        message: "Incorrect email or password" 
      });
    }

    // Check password
    const auth = await bcrypt.compare(password, user.password);
    if (!auth) {
      return res.status(401).json({ 
        success: false,
        message: "Incorrect email or password" 
      });
    }

    // Create token
    const token = createSecretToken(user._id);

    // Set cookie
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
      maxAge: 3600000, // 1 hour
    });

    res.status(200).json({ 
      success: true,
      message: "User logged in successfully", 
      user: {
        id: user._id,
        email: user.email,
        username: user.username
      },
      token
    });

  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ 
      success: false,
      message: error.message || "Login failed" 
    });
  }
};