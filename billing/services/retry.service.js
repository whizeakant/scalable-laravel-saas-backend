const Event = require("../models/event.model");

exports.retryFailedEvents = async () => {
  const failed = await Event.find({ processed: false });

  for (const event of failed) {
    try {
      console.log("Retrying:", event.type);

      // reprocess logic here

      event.processed = true;
      await event.save();

    } catch (err) {
      console.error("Retry failed");
    }
  }
};
