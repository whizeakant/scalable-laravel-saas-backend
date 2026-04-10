const cron = require("node-cron");
const { retryFailedEvents } = require("../services/retry.service");

cron.schedule("*/5 * * * *", async () => {
  console.log("Running retry job...");
  await retryFailedEvents();
});
