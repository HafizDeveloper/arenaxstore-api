// routes/orders.js
import express from "express";
import { createTopup } from "../controllers/topupController.js";

const router = express.Router();

router.post("/create", createTopup);

router.get("/", (req, res) => {
  res.json({ message: "Orders route berfungsi!" });
});

export default router;
