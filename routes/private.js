const express = require("express");
const router = express.Router();
const { getPrivateData } = require("../controllers/private");
const { protect } = require("../middleware/auth");
const {
  getTransactions,
  addTransaction,
} = require("../controllers/transaction");

router.route("/").get(protect, getPrivateData);

router.route("/transactions").get(protect, getTransactions);

router.route("/addtransaction").post(protect, addTransaction);

module.exports = router;
