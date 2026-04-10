const router = require("express").Router();

router.get("/status", async (req, res) => {
  res.json({ billing: "ok" });
});

module.exports = router;
