import express from 'express';
import Blog from "../models/blog.js";

const composeRouter = express.Router();

composeRouter.get('/', (req, res) => {
  res.render("composeBlog.ejs");
});

composeRouter.post('/',(req,res)=>{
    const {title,content}=req.body;

    //check if missing field
    if(!title || !content)
        {
        return res.send("Please enter all details");}

 
 const newBlog = new Blog({ title, content });
newBlog.save()
.then(()=>{
    console.log("Blog Added Successfully");
    res.redirect('/');
})
.catch((err)=> console.log(err))
});

export default composeRouter;