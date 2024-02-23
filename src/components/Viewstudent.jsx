import { Button, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TableRow } from '@mui/material'
import { red } from '@mui/material/colors'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Viewstudent = () => {
    var [user, setUser] = useState([]);
    const[select,setselect]=useState([]);
    const[edit,setedit]=useState([]);
        
    const deleteStudent = (id) => {
        axios
            .delete("http://localhost:4000/students/" + id).then(() => {
                alert("deleted row");
                window.location.reload();
            }).catch(() => {
                alert("error delete row");
            })
    }
    const editstudent = (id)=>{
        axios.get("http://localhost:4000/students/"+id).then((response)=>{
            setselect(response.data);
            setedit(true);
    })
    
        .catch(()=>{
            alert("cannot edit now");
    })

    useEffect(() => {
        axios.get("http://localhost:4000/student").then((response) => {
            console.log(response.data)
            setname(response.data);
        })
    }, []);
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
                        {name.map((val, index) => {
                            return (
                                <TableRow>
                                    <TableCell>
                                        {val.student_name}

                                    </TableCell>
                                    <TableCell>
                                        {val.student_age}</TableCell>
                                    <TableCell>
                                        {val.student_dept}   </TableCell>


                                    <TableCell>
                                        <Button>Edit</Button></TableCell>
                                    <TableCell>
                                        <Button onClick={() => {
                                            deleteStudent(val._id);
                                        }}>Delete</Button>
                                    </TableCell>

                                </TableRow>
                            )
                        })}
                    </TableBody>


                </Table>
            </TableContainer>
        </div>
    )
}}

export default Viewstudent