import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import hotelsRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import reservationRoutes from "./routes/reservation.js";


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
