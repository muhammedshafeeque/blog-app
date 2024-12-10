import express from 'express'
import { createBlog, getBlog, getBlogs } from '../Controller/blogController.js'
const router= express.Router()
router.get('/blogs',getBlogs)
router.post('/blog',createBlog)
router.get('/blog/:id',getBlog)
export const blogRouter=router