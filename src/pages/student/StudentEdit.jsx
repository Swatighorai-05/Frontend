import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import MainCard from 'components/MainCard'

function StudentEdit() {
  const { id } = useParams()
  const navigate = useNavigate()

  const [form, setForm] = useState({
    id: '',
    name: '',
    rollno: '',
    image: ''
  })

  useEffect(() => {
    fetch(`https://6881ba1366a7eb81224ba66f.mockapi.io/Table/${id}`)
      .then((res) => res.json())
      .then((res) => {
        setForm(res)
      })
      .catch((err) => {
        console.log('Error fetching data:', err)
      })
  }, [id])

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleUpdate = (e) => {
    e.preventDefault()

    fetch(`https://6881ba1366a7eb81224ba66f.mockapi.io/Table/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form)
    })
      .then((res) => res.json())
      .then(() => {
        navigate('/Student-List')
      })
      .catch((err) => {
        console.log('Error updating data:', err)
      })
  }

  return (
    <MainCard title="Edit Student">
      <form onSubmit={handleUpdate}>

        <TextField
          label="Student ID"
          name="id"
          value={form.id || ''}
          onChange={handleChange}
          sx={{ mr: 2, mb: 2 }}
        />

        <TextField
          label="Student Name"
          name="name"
          value={form.name || ''}
          onChange={handleChange}
          sx={{ mr: 2, mb: 2 }}
        />

        <TextField
          label="Roll No"
          name="rollno"
          value={form.rollno || ''}
          onChange={handleChange}
          sx={{ mr: 2, mb: 2 }}
        />

        <TextField
          label="Image / Image URL"
          name="Image"
          value={form.image || ''}
          onChange={handleChange}
          sx={{ mr: 2, mb: 2, width: '400px' }}
        />

        <Button type="submit" variant="contained" color="primary">
          Update
        </Button>
      </form>
    </MainCard>
  )
}

export default StudentEdit
