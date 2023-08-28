import { Project } from "../models/Project.js"

export const getProject = async (req,res) => {
    try {
        const project = await Project.findAll()
        res.json(project)
    } catch (error) {
        return res.status(500).json({
            message : error.message
        })
    }
}

export const getProjectId = async (req,res) =>{
    try {
        const project = await Project.findById(req.params.id)
        return res.json(project)
    } catch (error) {
        return res.status(500).json({
            message : error.message
        })
    }
}

export const createProject = async (req,res) =>{
    const {name , priority,description} = req.body
    const newProject = await Project.create({
        name,
        priority,
        description
    })
    res.json(newProject)
    console.log(req.body)
}