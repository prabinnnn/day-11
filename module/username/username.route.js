const router = require("express").Router();

router.get("/", (req, res, next) => {
  try {
    res.json({ msg: "hello from user" });
  } catch (e) {
    next(e);
  }
});
router.post("/", (req, res, next) => {
  try {
    const data = req.body;
    res.json(`the user is ${data}`);
  } catch (e) {
    next(e);
  }
});
module.exports = router;
