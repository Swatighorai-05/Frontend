import React, { useEffect, useState } from 'react'
import MainCard from 'components/MainCard';


import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Institute from '../../api/Institute';
export default function InstituteList() {
    const [data, setData] = useState([])

    useEffect(() => {
        Institute(setData)
    }, [])


    return (
        <MainCard>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="right">id</TableCell>
                            <TableCell align="right">Institutename</TableCell>
                            <TableCell align="right">city</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>



                        {data.map((row) => (
                            <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell component="th" scope="row">
                                    {row.id}
                                </TableCell>
                                <TableCell align="right">{row.Institutename}</TableCell>
                                <TableCell align="right">{row.city}</TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </MainCard>
    );
}
