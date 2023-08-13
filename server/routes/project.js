import express from 'express'
import {
  createProject,
  getProjectById,
  updateProject,
  deleteProject,
  listProjects,
  getProjectsByClientId,
} from '../controllers/project.js'
import { verifyToken } from '../verifyToken.js'

const router = express.Router()

router.post('/project', verifyToken, createProject)
router.get('/project/:id', verifyToken, getProjectById)
router.get('/project/client/:clientId', verifyToken, getProjectsByClientId)
router.put('/project/:id', verifyToken, updateProject)
router.delete('/project/:id', verifyToken, deleteProject)
router.get('/project', verifyToken, listProjects)

export default router
