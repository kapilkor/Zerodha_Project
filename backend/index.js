
import dotenv from "dotenv";
dotenv.config();

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
  
import authRoute from "./Routes/auth.js";

import HoldingsModel from "./model/HoldingsModel.js";
import PositionModel from "./model/PositionModel.js";
import OrderModel from "./model/orderModel.js";
  
const app = express();
const { MONGO_URL, PORT } = process.env;

// Middleware Order
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:3001"],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.use(cookieParser());

app.use("/", authRoute);


// Holdings & Positions Data Fetch
app.get("/allHoldings", async (req, res) => {
  const HoldingsModel = (await import("./model/HoldingsModel.js")).default;
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
  const PositionModel = (await import("./model/PositionModel.js")).default;
  let allPositions = await PositionModel.find({});
  res.json(allPositions);
});

// Orders API
app.post("/newOrder", async (req, res) => {
  const OrderModel = (await import("./model/orderModel.js")).default;
  let newOrder = new OrderModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });

  app.get("/data", async (req, res) => {
    try{
      const data = await fetch(url);
      const jsonData = await data.json();
      res.json(jsonData);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch data" });
    }  
  });
  await newOrder.save();
  res.send("Order saved!");
});

app.get("/data", async (req, res) => {  
  try {

    // let stock = req.query.stock || "QUICKHEAL.NS";
    // const url = `https://finnhub.io/api/v1/quote?symbol=${stock}&token=${process.env.VITE_API_KEY}`;
    // const url = `https://api.twelvedata.com/quote?symbol=TCS,INFY,SBIN,RELIANCE,ITC&apikey=${process.env.VITE_API_KEY}`;

    const url =  `https://eodhd.com/api/real-time/${stock}?api_token=${process.env.VITE_API_KEY}&fmt=json`;

    const data = await fetch(url);
    const jsonData = await data.json();
    res.json(jsonData);
  }catch (error) {
    res.status(500).json({ error: "Failed to fetch status" });
  } 
});


// DB + Server Start
mongoose.connect(MONGO_URL)
  .then(() => {
    console.log("MongoDB connected successfully");
    app.listen(PORT, () => {
      console.log(`Server running → http://localhost:${PORT}`);
    });
  })
  .catch(err => console.error("DB Error:", err.message));



 



