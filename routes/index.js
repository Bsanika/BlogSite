import express from 'express';
import Blog from "../models/blog.js";
const indexRouter = express.Router();

indexRouter.get('/', async(req, res) => {
 const allBlogs=await Blog.find();
  res.render("index.ejs",{blogs:allBlogs});
});

export default indexRouter;