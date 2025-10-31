import express from 'express';
const router = express.Router();

// contoh route test
router.get('/', (req, res) => {
  res.json({ message: 'Orders route working!' });
});

export default router;
