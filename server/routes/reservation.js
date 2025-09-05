const express = require("express");
const Reservation = require("../models/Reservation.js");
const { verifyUser } = require("../utils/verifyToken.js");
const User = require("../models/User.js");
// Initialize the router
const router = express.Router();

// CREATE RESERVATION
router.post("/", verifyUser, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const reservationData = {
      ...req.body,
      user: req.user.id, // Ensure this matches your schema
      userName: user.username,
      userEmail: user.email
    };

    const newReservation = new Reservation(reservationData);
    const savedReservation = await newReservation.save();
    res.status(201).json(savedReservation);
  } catch (err) {
    console.error("Reservation error:", err);
    res.status(500).json({ message: "Reservation failed", error: err.message });
  }
});
// GET USER RESERVATIONS
router.get("/:userId", verifyUser, async (req, res) => {
  try {
    const reservations = await Reservation.find({ user: req.params.userId })
      .populate("hotel")
      .populate("room");
    res.status(200).json(reservations);
  } catch (err) {
    res.status(500).json(err);
  }
});
router.post("/", verifyUser, async (req, res) => {
  try {
    // Get user details from the authenticated user
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const reservationData = {
      ...req.body,
      userName: user.username,  // Add username
      userEmail: user.email    // Add email
    };

    const newReservation = new Reservation(reservationData);
    const savedReservation = await newReservation.save();
    res.status(201).json(savedReservation);
  } catch (err) {
    res.status(500).json(err);
  }
});

// UPDATE RESERVATION
router.put("/:id", verifyUser, async (req, res) => {
  try {
    const updatedReservation = await Reservation.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedReservation);
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE RESERVATION
router.delete("/:id", async (req, res) => {
  try {
    const reservation = await Reservation.findById(req.params.id);
    if (!reservation) {
      return res.status(404).json("Reservation not found");
    }

    await Reservation.findByIdAndDelete(req.params.id);
    res.status(200).json("Reservation cancelled successfully");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;