import express from 'express'
import { blogRouter } from './blogRouter.js'
const router= express.Router()
router.use('/blog',blogRouter)
export const Router=router