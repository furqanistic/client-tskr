import Project from '../models/Project.js'

// 1. Create a new project
export const createProject = async (req, res) => {
  try {
    const newProject = new Project(req.body)
    await newProject.save()
    res.status(201).send(newProject)
  } catch (error) {
    res.status(400).send(error)
  }
}

// 2. Get a specific project by ID
export const getProjectById = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id).populate('client')
    if (!project) {
      return res.status(404).send({ message: 'Project not found' })
    }
    res.send(project)
  } catch (error) {
    res.status(500).send(error)
  }
}

// 3. Update a project
export const updateProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    })
    if (!project) {
      return res.status(404).send({ message: 'Project not found' })
    }
    res.send(project)
  } catch (error) {
    res.status(400).send(error)
  }
}

// 4. Delete a project
export const deleteProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id)
    if (!project) {
      return res.status(404).send({ message: 'Project not found' })
    }
    res.send(project)
  } catch (error) {
    res.status(500).send(error)
  }
}

// 5. List all projects
export const listProjects = async (req, res) => {
  try {
    const projects = await Project.find({}).populate('client')
    res.send(projects)
  } catch (error) {
    res.status(500).send(error)
  }
}

// get all  projects by client id
export const getProjectsByClientId = async (req, res, next) => {
  try {
    const clientId = req.params.clientId // Assuming you're passing client ID as a route parameter

    const projects = await Project.find({ client: clientId })

    if (!projects.length) {
      return res
        .status(404)
        .json({ message: 'No projects found for the given client ID.' })
    }

    return res.status(200).json(projects)
  } catch (error) {
    next(error) // This will forward the error to your error-handling middleware
  }
}
