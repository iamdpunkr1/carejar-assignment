const express = require('express')
var cors = require('cors')
const {generateDoctors} = require('./controlllers/doctorsControlller')
const { generateDepartments} = require('./controlllers/departmentController')

const app = express()   
app.use(express.json()) 
app.use(cors())

app.get('/', generateDepartments)
app.get('/:category', generateDoctors)

app.listen(5000,()=> console.log('Server running on port 5000'))