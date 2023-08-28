import { Router } from "express";
import {getProject,getProjectId,createProject} from '../controllers/projects.controller.js'


const router = Router()

router.get('/projects',getProject)
router.get('/projects/:id',getProjectId)
router.post('/projects',createProject)
router.put('/projects/:id')
router.delete('/projects/:id')

export default router

