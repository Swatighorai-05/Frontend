import React, { useState } from 'react';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  Paper, Button, Snackbar, TextField
} from '@mui/material';
import MainCard from 'components/MainCard';

function StudentAdd() {
  const [data, setData] = useState([]);
  const [form, setForm] = useState({
    id: '',
    name: '',
    rollno: '',
    image: ''
  });
  const [open, setOpen] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 

    setData([...data, form]);
    setOpen(true);

    fetch('https://6881ba1366a7eb81224ba66f.mockapi.io/Table', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });

    setForm({ id: '', name: '', rollno: '', image: '' });
  };

  return (
    <>
      <MainCard title="Add Student">

        <form onSubmit={handleSubmit}>
          <TextField name="id" label="Student ID" onChange={handleChange} />
          <TextField name="name" label="Student Name" onChange={handleChange} />
          <TextField name="rollno" label="Roll No" onChange={handleChange} />
          <TextField name="image" label="Image" onChange={handleChange} />

          <Button type="submit" variant="contained">
            ADD
          </Button>
        </form>

        <TableContainer component={Paper} sx={{ mt: 3 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Roll No</TableCell>
                <TableCell>Image</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {data.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.rollno}</TableCell>
                  <TableCell>{row.image}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

      </MainCard>

      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={() => setOpen(false)}
        message="Student Added Successfully"
      />
    </>
  );
}

export default StudentAdd;

















