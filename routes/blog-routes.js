import express from "express";
const blogRouter = express.Router()
import { addBlog, deleteBlog, getAllBlogs, getById, updateBlog } from "../controllers/blog-controller";
import blog from "../models/blog";

blogRouter.get('/', getAllBlogs)
blogRouter.post('/add', addBlog)
blogRouter.put('/update/:id', updateBlog)
blogRouter.get("/:id", getById)
blogRouter.delete("/:id", deleteBlog)
blogRouter.get('/user/:id')

export default blogRouter

