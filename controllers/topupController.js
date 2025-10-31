// controllers/topupController.js
exports.createTopup = async (req, res) => {
  try {
    const { uid, amount } = req.body;
    res.json({
      success: true,
      message: `Topup ${amount} diamond untuk UID ${uid} diterima.`,
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
