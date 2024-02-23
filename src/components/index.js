const express = require("express")
const cors=require("cors")
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = new express();

app.use(cors())
app.use(bodyParser.json());
let student = require("./student.model");
mongoose.connect("mongodb+srv://sarima7072:1G8e80rU89OAkfVA@cluster0.q5xxpze.mongodb.net/studentbase?retryWrites=true&w=majority&appName=Cluster0");
const connection = mongoose.connection;
connection.once("open",()=>{
    console.log("mongoose connection established");
});

app.get("/",(req,res)=>{
    console.log("request");

    res.json("hello world");
});
app.get('/hai',(req,res)=>{
    console.log("hai request");
    res.json("welcome to the world");
});
app.get('/people',(req,res)=>{
    console.log("peopel request recieved")
    res.json([{name:"sarima", dept:"IT"}, {name:"raha",dept:"CS"}



]);
});
app.get('/student',async(req,res)=>{
    console.log("student request recieved");
    let     data = await student.find().catch ((err=>{
        res.json("error loading data");
    }));
    res.json(data);
    //  res.json([{name:"sarima", dept:"IT",age:22}, {name:"raha",dept:"CS", age:20}]);
});
app.get('/student/:id',async(req,res)=>{
    let id= req.params.id;
    let data=await student.findById(id).catch(err=>{
        res.json("error findig person");
    });
    if(!data){
        res.json("not found");
    }
    else{
        res.json(data);
    }
})
app.delete('/students/:id',async(req,res)=>{
    let id =req.params.id;
    await student.findByIdAndDelete(id)
    .then(()=>{
        res.json("Data Remove successfully");
    })
    .catch(()=>{
        res.json("Failed deleting data");
    })
})

app.post('/student',(req,res)=>{
    console.log(req.body);
    let Student=new student(req.body);
    Student.save()
    .then(()=>{
        res.json("saved");})
        .catch (err =>{
            res.json("err:"+err);
        })
    });

app.listen("4000",()=>{
    console.log("started server on 4000")
});