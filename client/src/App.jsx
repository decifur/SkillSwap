/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    fetchData()
  }, [])

  async function fetchData() {

    const response = await fetch('/api/dd', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: 'MI Sajid',
        email: 'misajidsa@gmail.com',
      })
    });

    const Userdata = await response.json()
    console.log(data)
    setData(Userdata)
  }

  return (
    <div className='p-5'>
      <strong className='text-2xl block'>Technologies</strong><br />
      <ul className='list-disc pl-5'>
        <h1>{data.username}</h1>
        <h1></h1>
        <h1>{data.email}</h1>
        <li>Tailwind CSS</li>
        <li>Chakra-UI</li>
        <li>Redux-Toolkit</li>
      </ul>
    </div>

  )
}

export default App