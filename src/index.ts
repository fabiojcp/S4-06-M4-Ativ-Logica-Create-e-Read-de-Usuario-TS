import express from 'express'
import users from './routes/users.routes'

const app = express()

app.use(express.json())
app.use("/users", users)

app.listen(3000)