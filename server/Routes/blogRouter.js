import express from 'express'
import { createBlog, getBlogs } from '../Controller/blogController.js'
const router= express.Router()
router.get('/blogs',getBlogs)
router.post('/blog',createBlog)
export const blogRouter=router