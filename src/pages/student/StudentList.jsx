// import React, { useEffect, useState } from 'react'
// import MainCard from 'components/MainCard';


// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import Avatar from '@mui/material/Avatar';
// import Student from '../../api/Student';
// import { Link } from 'react-router';
// import { Button } from '@mui/material';
// function StudentList() {
//     const [data, setData] = useState([])

//     useEffect(() => {
//         // fetch("https://6881ba1366a7eb81224ba66f.mockapi.io/Table")
//         //     .then((res) => res.json())
//         //     .then((res) => setData(res))
//         //make separate file in src->api and paste commentted code......and import it here
//         Student(setData)
//     }, [])

//     return (
//         <>
//             <Link to="/Student-add">ADD</Link>
//             <Link to="/Student-edit">EDIT</Link>
//             <MainCard>
//                 <TableContainer component={Paper}>
//                     <Table sx={{ minWidth: 650 }} aria-label="simple table">
//                         <TableHead>
//                             <TableRow>
//                                 <TableCell align="right">STUDENTID</TableCell>
//                                 <TableCell align="right">STUDENT NAME</TableCell>
//                                 <TableCell align="right">STUDENT ROLLNO</TableCell>
//                                 <TableCell align="right">SEMESTER</TableCell>
//                             </TableRow>
//                         </TableHead>
//                         <TableBody>

//                             {/* bcoz row is not defined  */}

//                             {/* {rows.map((row) => (
//                                 <TableRow
//                                     key={row.name}
//                                     sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//                                 > */}

//                             {data.map((row) => (
//                                 <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
//                                     <TableCell component="th" scope="row">
//                                         {row.id}
//                                     </TableCell>
//                                     <TableCell align="right">{row.Institutename}</TableCell>
//                                     <TableCell align="right">{row.city}</TableCell>
//                                     <TableCell align="right">
//                                         <Avatar alt="Remy Sharp" src={row.semester} />
//                                     </TableCell>
//                                 </TableRow>
//                             ))}

//                             {data.map((row) => (
//                                 <TableRow key={row.id}>

//                                     <TableCell>{row.id}</TableCell>
//                                     <TableCell align="right">{row.Institutename}</TableCell>
//                                     <TableCell align="right">{row.city}</TableCell>
//                                     <TableCell align="right">
//                                         <Avatar src={row.semester} />
//                                     </TableCell>

//                                     <TableCell align="right">

//                                         <Link to={`/Student-edit/${row.id}`}>
//                                             <Button variant="contained" color="warning" sx={{ mr: 1 }}>
//                                                 Edit
//                                             </Button>
//                                         </Link>

//                                         <Button
//                                             variant="contained"
//                                             color="error"
//                                             onClick={() => handleDelete(row.id)}
//                                         >
//                                             Delete
//                                         </Button>

//                                     </TableCell>

//                                 </TableRow>
//                             ))}
//                         </TableBody>
//                     </Table>
//                 </TableContainer>

//             </MainCard>

//         </>
//     )
// }

// export default StudentList























import React, { useEffect, useState } from 'react'
import MainCard from 'components/MainCard'

import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import Avatar from '@mui/material/Avatar'
import Student from '../../api/Student'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'

function StudentList() {
  const [data, setData] = useState([])

  useEffect(() => {
    Student(setData)
  }, [])

  const handleDelete = (id) => {
    fetch(`https://6881ba1366a7eb81224ba66f.mockapi.io/Table/${id}`, {
      method: 'DELETE'
    }).then(() => {
      setData(data.filter((item) => item.id !== id))
    })
  }

  return (
    <>
      <Link to="/Student-add">ADD</Link>

      <MainCard>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">

            <TableHead>
              <TableRow>
                <TableCell>STUDENT ID</TableCell>
                <TableCell align="right">STUDENT NAME</TableCell>
                <TableCell align="right">ROLLNO</TableCell>
                <TableCell align="right">IMAGE</TableCell>
                <TableCell align="right">ACTION</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {data.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.id}</TableCell>
                  <TableCell align="right">{row.name}</TableCell>
                  <TableCell align="right">{row.rollno}</TableCell>
                  <TableCell align="right">
                    <Avatar src={row.image} />
                  </TableCell>

                  <TableCell align="right">
                    <Link to={`/Student-edit/${row.id}`}>
                      <Button variant="contained" color="warning" sx={{ mr: 1 }}>
                        Edit
                      </Button>
                    </Link>

                    <Button
                      variant="contained"
                      color="error"
                      onClick={() => handleDelete(row.id)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>

          </Table>
        </TableContainer>
      </MainCard>
    </>
  )
}

export default StudentList
