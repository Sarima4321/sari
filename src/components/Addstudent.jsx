import { Button } from '@mui/material'
import axios from 'axios';
import React from 'react'
import { useState } from 'react';

const Addstudent = (props) => {
    var[data,setData]= useState({
      id: props.data.id,
        name:props.data.name,
        age: props.data.age,
        dept:props.data.dept
});
  
    const Inputhandler=(e) =>{
        setData({...data,[e.target.name]:e.target.value})
        console.log(data);
    }
    const submit = () => {
        axios.post("http://localhost:4000/student",{
          student_name: data.name,
          student_age: data.age,
          student_dept:data.dept
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
        <input onChange={Inputhandler} name='name' placeholder="Name"  value="temp"/>
        <br />
        <br />
        <input onChange={Inputhandler} name='age' placeholder="Age"/>
        <br />
        <br />
        <input variant='outlined' onChange={Inputhandler} name='dept' placeholder="dept"/>
        <br /><br />
        <Button variant='contained' onClick={submit}>Submit</Button>
    </div>
  )
}

export default Addstudent