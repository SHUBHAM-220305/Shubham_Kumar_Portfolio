const express = require("express");
const router = express.Router();
const Testimonial = require("../models/Testimonial");

// GET all testimonials
router.get("/", async (req, res) => {
  try {
    const testimonials = await Testimonial.find().sort({ createdAt: -1 });
    res.json(testimonials);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST new testimonial
router.post("/", async (req, res) => {
  try {
    const {name, role, message} = req.body;
    if(!name) {
        return res.status(400).json({
        success: false,
        message: "Please enter your name",
      });
    }

    if(!role) {
        return res.status(400).json({
        success: false,
        message: "Please enter your role",
      });
    }

    if(!message) {
        return res.status(400).json({
        success: false,
        message: "Please enter your message",
      });
    }
    const newTestimonial = new Testimonial(req.body);
    const saved = await newTestimonial.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;