const Subscription = require("../models/subscription.model");

exports.updateSubscription = async (data) => {
  return Subscription.findOneAndUpdate(
    { subscriptionId: data.id },
    {
      status: data.status,
      currentPeriodEnd: new Date(data.current_period_end * 1000),
    },
    { upsert: true, new: true }
  );
};
