const express=require('express')
const cors=require('cors')
const app=express()
const port=3139
const configureDB=require('./config/db')
const {checkSchema}=require('express-validator')
const tasksCltr=require('./app/controller/task-ctrl')
const {taskValidationSchema,idvalidationSchema}=require('./app/validator/task-validator')

app.use(express.json())
app.use(cors())
configureDB()


app.post('/api/tasks',checkSchema(taskValidationSchema),tasksCltr.postlist)

app.get('/api/tasks',tasksCltr.lists)

app.get('/api/tasks/:id',checkSchema(idvalidationSchema),tasksCltr.singlerecord)

app.put('/api/tasks/:id',checkSchema(taskValidationSchema),checkSchema(idvalidationSchema),tasksCltr.updatelist)

app.delete('/api/tasks/:id',checkSchema(idvalidationSchema),tasksCltr.deletelist)


app.listen(port,()=>{
  console.log("server is running on",port)
})

// status code update remaining we will do that latter