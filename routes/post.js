

import express from 'express';
import Blog from "../models/blog.js";

const PostRouter = express.Router();

// GET request to view a specific blog post
PostRouter.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findOne({ _id: id });
    if (!blog) {
      return res.status(404).send("Blog not found");
    }
    res.render("particularBlog.ejs", { blog });
  } catch (error) {
    console.error("Error fetching blog:", error);
    res.status(500).send("Internal Server Error");
  }
});

// DELETE request to delete a specific blog post
PostRouter.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Blog.deleteOne({ _id: id });
    console.log("Blog deleted successfully");
    res.redirect('/');
  } catch (error) {
    console.error("Error deleting blog:", error);
    res.status(500).send("Internal Server Error");
  }
});

// GET request to render edit form for a specific blog post
PostRouter.get('/:id/edit', async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findOne({ _id: id });
    if (!blog) {
      return res.status(404).send("Blog not found");
    }
    res.render("editBlog.ejs", { blog });
  } catch (error) {
    console.error("Error fetching blog for edit:", error);
    res.status(500).send("Internal Server Error");
  }
});

// PUT request to update a specific blog post
PostRouter.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;
    await Blog.updateOne({ _id: id }, { title, content });
    console.log("Blog updated successfully");
    res.redirect(`/post/${id}`);
  } catch (error) {
    console.error("Error updating blog:", error);
    res.status(500).send("Internal Server Error");
  }
});

export default PostRouter;
