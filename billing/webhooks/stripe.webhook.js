const express = require("express");
const router = express.Router();

const Event = require("../models/event.model");
const { updateSubscription } = require("../services/subscription.service");
const { saveInvoice } = require("../services/invoice.service");

router.post("/stripe", async (req, res) => {
  const event = req.body;

  await Event.create({
    eventId: event.id,
    type: event.type,
    payload: event,
  });

  switch (event.type) {
    case "customer.subscription.updated":
      await updateSubscription(event.data.object);
      break;

    case "invoice.payment_succeeded":
      await saveInvoice(event.data.object);
      break;
  }

  res.json({ received: true });
});

module.exports = router;
