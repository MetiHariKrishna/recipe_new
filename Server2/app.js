const express = require('express');
const createError = require('http-errors');
const morgan = require('morgan');
const cors = require("cors") ;
const mongoose =require("mongoose");







const  data =require("./api/test.router")

require('dotenv').config();
const app = express();
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));


app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
})


app.use("/form",data)

// const uri = "mongodb+srv://MetiHarikrishna:<password>@cluster0.m3dtdm8.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

mongoose
  .connect(
    
   "mongodb+srv://MetiHarikrishna:krishna631@cluster0.m3dtdm8.mongodb.net/?retryWrites=true&w=majority"
  
    // `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@mydatabase.i6jal.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
  )
  .then(() => console.log("mongo db is connected...."))
  .catch((err) => console.log("error occure while connecting time", err));

  const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 @ http://localhost:${PORT}`));



