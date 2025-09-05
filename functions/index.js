const {onRequest} = require("firebase-functions/v2/https");
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
require("dotenv").config();

// Import routes
const authRoute = require("./routes/auth");
const usersRoute = require("./routes/users");
const hotelsRoute = require("./routes/hotels");
const roomsRoute = require("./routes/rooms");
const reservationRoutes = require("./routes/reservation");

const app = express();

// Connect to MongoDB
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to mongoDB.");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw error;
  }
};

// Initialize connection
connect();

mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected!");
});

// Middlewares
app.use(cors({
  origin: ['https://bookingsy-a0ecb.web.app', 'http://localhost:3000'],
  credentials: true
}));
app.use(cookieParser());
app.use(express.json());

// Routes
app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);
app.use("/api/reservations", reservationRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

// Export the Express app as a Firebase Function
exports.api = onRequest(app);