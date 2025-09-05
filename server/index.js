const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const usersRoute = require("./routes/users");
const hotelsRoute = require("./routes/hotels");
const roomsRoute = require("./routes/rooms");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const reservationRoutes = require("./routes/reservation");


const app = express();
dotenv.config();

const connect = async () => {
  try {
    console.log("Attempting to connect to MongoDB...");
    console.log("MONGO URL:", process.env.MONGO ? "Set" : "Not set");
    await mongoose.connect(process.env.MONGO + 'syriabooking?retryWrites=true&w=majority');
    console.log("Connected to mongoDB.");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected!");
});

//middlewares
app.use(cors())
app.use(cookieParser())
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);

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
app.use(cors({
  origin: ['https://bookingsy-a0ecb.web.app', 'http://localhost:3000'],
  credentials: true
}));

app.use("/api/reservations", reservationRoutes); 
const PORT = process.env.PORT || 8800;
app.listen(PORT, () => {
  connect();
  console.log(`Connected to backend on port ${PORT}.`);
});
