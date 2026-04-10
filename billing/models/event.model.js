const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
  eventId: String,
  type: String,
  payload: Object,
  processed: { type: Boolean, default: false },
});

module.exports = mongoose.model("Event", EventSchema);
