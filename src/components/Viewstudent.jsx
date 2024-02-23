import { Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TableRow } from '@mui/material'
import { red } from '@mui/material/colors'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Viewstudent = () => {
    var[name,setname]= useState([]);
    useEffect(()=>{
        axios.get("http://localhost:4000/student").then((response)=>{
            console.log(response.data)
            setname(response.data);
        })
    })
  return (
    <div>
        <h1>Viewstudent</h1>
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Age</TableCell>
                        <TableCell>dept</TableCell>
                    </TableRow>
                </TableHead>
                    <TableBody>
                        {name.map((val,index)=>
                        {
                            return(
                                <TableRow>
                                    <TableCell>
                                        {val.name}
                                
                                    </TableCell>
                                    <TableCell>
                                        {val.age}</TableCell>   
                                        <TableCell>
                                        {val.dept}   </TableCell> 
                                                            
                                        </TableRow>
                            )
                        })}
                    </TableBody>
                    
              
            </Table>
        </TableContainer>
    </div>
  )
}

export default Viewstudent