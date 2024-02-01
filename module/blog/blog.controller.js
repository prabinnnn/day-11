const blogmodel = require("./blog.model");
const create = (payload) => {
  return blogmodel.create(payload);
};
const get = () => {
  return bloggmodel.find();
};
const getbyid = (id) => {
  return bloggmodel.findone(id);
};
const updatebyid = (id) => {
  return bloggmodel.updateOne({ id }, payload);
};
const deletebyid = (id) => {
  return blogmodel.deleteOne(id);
};
module.export = { create, get, updatebyid, getbyid, deletebyid };
