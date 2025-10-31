import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import orderRoutes from "./routes/orders.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Route utama
//const topupRoutes = require('./routes/topup');
//app.use('/api/topup', topupRoutes);


// Jalankan server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
