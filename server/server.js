const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const authRoutes = requier('./routes/auth');
const taskRoutes = require('./routes/tasks');


require('dotenv').config();

const app = express()

app.use(express.json())
app.use(cors())

app.use('./api/auth',authRoutes)
app.use('./api/tasks', taskRoutes)

mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true , useUnifiedTopology:true})
.then(()=> console.log('MongoDb connected'))
.catch(err=> console.log(err));

const PORT = process.env.PORT || 5000;

app.listen(PORT , ()=> console.log(`server running on ${PORT}`));