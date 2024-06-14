import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  postedAt:{
    type:String,
    default:new Date().toString()
  }
});

const Blog = mongoose.model('Blog', blogSchema);

export default Blog;
