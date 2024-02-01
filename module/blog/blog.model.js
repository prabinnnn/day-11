const { Schema, model } = require("mongoose");
const blogschema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  publishedDAte: { type: time, default: Date.now() },
  categories: { type: array },
  words: { type: number, required: true },
  time: { type: number },
  content: { type: string, required: true },
  feauredImage: { type: string },
  createdat: { type: Date, default: Date.now() },
  updatedat: { type: Date, default: Date.now() },
});
module.exports = new model("blog", blogschema);
