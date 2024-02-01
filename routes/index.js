const router = require("express").Router();
const { error } = require("console");
const usernamerouter = require("../module/username/username.route");
const userindex = "/ap1/v1";
router.get("/", async (req, res, next) => {
  try {
    const { data } = req.body;
    console.log(data);
    const result = await blogcontroller.find(data);
    res.json(`${data}`);
  } catch (e) {
    next(e);
  }
});
router.post("/data", async (req, res, next) => {
  try {
    const { data } = req.body;
    console.log(data);
    const result = await blogcontroller.create(data);
    if (!data) throw new error("something is missing");
    res.json(`${result}`);
  } catch (e) {
    next(e);
  }
});
router.put("/data", async (req, res, next) => {
  try {
    const { data } = req.body;
    console.log(data);
    const result = await blogcontroller.updateOne(data);
    if (!data) throw new error("something is missing");
    res.json(`${result}`);
  } catch (e) {
    next(e);
  }
});
router.patch("/data", async (req, res, next) => {
  try {
    const { data } = req.body;
    console.log(data);
    const result = await blogcontroller.findOne(data);
    if (!data) throw new error("something is missing");
    res.json(`${result}`);
  } catch (e) {
    next(e);
  }
});
router.patch("/data", async (req, res, next) => {
  try {
    const { data } = req.body;
    console.log(data);
    const result = await blogcontroller.updateOne(data);
    if (!data) throw new error("something is missing");
    res.json(`${result}`);
  } catch (e) {
    next(e);
  }
});
router.post("/data", async (req, res, next) => {
  try {
    const { data } = req.body;
    console.log(data);
    const result = await blogcontroller.deleteOne(data);
    if (!data) throw new error("something is missing");
    res.json(`${result}`);
  } catch (e) {
    next(e);
  }
});
router.use(`${usernamerouter}`, userindex);
module.exports = router;
