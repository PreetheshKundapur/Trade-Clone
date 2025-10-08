require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");

// Models
const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");

// Routes
const authRoute = require("./Routes/AuthRoute");

// App configuration
const app = express();
const PORT = process.env.PORT || 3002;
const MONGO_URI = process.env.MONGO_URL;

// -------------------- MIDDLEWARE --------------------
app.use(cors({
  origin: ["http://trade-clone-kfyi-6gxqi6iem-preethesh-pks-projects.vercel.app", "http://trade-clone-z5ue.vercel.app"], // frontend + dashboard
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true, // allow cookies
}));

app.use(express.json()); // parse JSON
app.use(cookieParser()); // parse cookies

// -------------------- ROUTES --------------------
// Auth
app.use("/api/user", authRoute);

// Holdings
app.get("/allHoldings", async (req, res) => {
  try {
    const allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Positions
app.get("/allPositions", async (req, res) => {
  try {
    const allPositions = await PositionsModel.find({});
    res.json(allPositions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Orders
app.post("/newOrder", async (req, res) => {
  try {
    const newOrder = new OrdersModel({
      name: req.body.name,
      qty: req.body.qty,
      price: req.body.price,
      mode: req.body.mode,
    });
    await newOrder.save();
    res.status(201).json({ message: "Order saved successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// -------------------- DATABASE CONNECTION & SERVER --------------------
mongoose.connect(MONGO_URI)
  .then(() => {
    console.log(" MongoDB connected");
    app.listen(PORT, () => console.log(` Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error(" MongoDB connection error:", err);
  });
