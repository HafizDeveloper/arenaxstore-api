// controllers/topupController.js
export const createTopup = async (req, res) => {
  try {
    const { uid, amount, paymentMethod } = req.body;

    if (!uid || !amount) {
      return res.status(400).json({ message: "UID dan jumlah topup diperlukan" });
    }

    // Simpan ke database nanti, tapi sekarang kita simulate dulu
    const newOrder = {
      id: Date.now(),
      uid,
      amount,
      paymentMethod: paymentMethod || "manual",
      status: "PENDING",
    };

    res.status(201).json({
      success: true,
      message: "Pesanan topup telah diterima!",
      data: newOrder,
    });
  } catch (error) {
    console.error("Error dalam createTopup:", error);
    res.status(500).json({ message: "Ralat pelayan dalaman" });
  }
};
