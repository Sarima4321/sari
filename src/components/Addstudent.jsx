import { Button } from '@mui/material'
import axios from 'axios';
import React from 'react'
import { useState } from 'react';

const Addstudent = () => {
    var[data,setData]= useState();
    const Inputhandler=(e) =>{
        setData({...data,[e.target.name]:e.target.value})
        console.log(data);
    }
    const submit = () => {
        axios.post("http://localhost:4000/student",{
          student_name: data.name,
          student_age: data.age
        })
        .then(()=>{
          alert("new entry created successfully");
        })
        .catch(()=>{
          alert("error saving data");
        });
    }
  return (
    <div>
        <h1>Addstudent</h1>
        <br />
        <input onChange={Inputhandler} name='name' placeholder="Name"/>
        <br />
        <br />
        <input onChange={Inputhandler} name='age' placeholder="Age"/>
        <br />
        <br />
        <input variant='outlined' onChange={Inputhandler} name='department' placeholder="dept"/>
        <br /><br />
        <Button variant='contained' onClick={submit}>Submit</Button>
    </div>
  )
}

export default Addstudent