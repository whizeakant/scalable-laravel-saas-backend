const mongoose = require("mongoose");

const SubscriptionSchema = new mongoose.Schema({
  userId: String,
  customerId: String,
  subscriptionId: String,
  status: {
    type: String,
    enum: ["active", "trialing", "past_due", "canceled"],
  },
  plan: String,
  currentPeriodEnd: Date,
}, { timestamps: true });

module.exports = mongoose.model("Subscription", SubscriptionSchema);
