import express from 'express'
import mongoose from 'mongoose'
import { router as userRouter } from './routers/userRouter.js'
import { router as taskRouter } from './routers/taskRouter.js'

mongoose.connect('mongodb+srv://taskmanagerapp:lionheart08@krishna.5uae0.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is running on port:' + port)
})