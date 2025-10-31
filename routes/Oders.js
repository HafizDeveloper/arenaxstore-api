import express from "express";
import db from "../config/db.js";
import { Order } from "../models/Order.js";

const router = express.Router();

// Tambah order baru
router.post("/create", (req, res) => {
  const { uid, amount, email } = req.body;

  if (!uid || !amount || !email)
    return res.status(400).json({ message: "Data tidak lengkap" });

  const order = new Order(uid, amount, email);

  db.query(
    "INSERT INTO orders (uid, amount, email, status) VALUES (?, ?, ?, ?)",
    [order.uid, order.amount, order.email, order.status],
    err => {
      if (err) return res.status(500).json({ message: "DB error", error: err });
      res.json({ message: "Order diterima", data: order });
    }
  );
});

// Semak status order
router.get("/status/:uid", (req, res) => {
  const { uid } = req.params;

  db.query("SELECT * FROM orders WHERE uid = ?", [uid], (err, results) => {
    if (err) return res.status(500).json({ message: "DB error", error: err });
    res.json({ orders: results });
  });
});

export default router;
