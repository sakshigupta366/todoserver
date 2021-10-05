const express=require('express');
const app=express();
const mongoose=require('mongoose');
// const dotenv=require('dotenv');
const routeUrls=require('./routes/routes');
const cors=require('cors');
// dotenv.config();
mongoose.connect('mongodb://localhost/tododb',{ useUnifiedTopology: true,
useCreateIndex:true,useNewUrlParser:true,useFindAndModify:false },()=> console.log("database connected"));
app.use(express.json());
app.use(cors());
app.use('/app',routeUrls);                    //base path=/app
app.listen(4000,()=>{
    console.log("server is running up")
});