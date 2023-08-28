import expres from 'express'
import projectRoutes from './routes/projects.routes.js'

const app = expres()

app.use(projectRoutes)

export default app