import express from "express";
import cors from "cors";
import ordersRoute from "./routes/orders.js";
import topupRoute from "./routes/topup.js";

const app = express();

app.use(cors());
app.use(express.json());

// ROUTES
app.use("/api/orders", ordersRoute);
app.use("/api/topup", topupRoute);

app.get("/", (req, res) => {
  res.send("ArenaXStore API is running!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
