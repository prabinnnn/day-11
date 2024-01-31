const router = require("express").Router();
const { error } = require("console");
const usernamerouter = require("../module/username/username.route");
const userindex = "/ap1/v1";
router.get("/", (req, res, next) => {
  try {
    res.json({ msg: "hello from prabin" });
  } catch (e) {
    next(e);
  }
});
router.post("/id", (req, res, next) => {
  try {
    const { id } = req.body;
    if (!id) throw new error("something is missing");
    res.json({ msg: "hello from user" });
  } catch (e) {
    next(e);
  }
});
router.use(`${usernamerouter}`, userindex);
module.exports = router;
