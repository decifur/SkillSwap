/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    fetchData()
  }, [])

  async function fetchData() {
    const response = await fetch('/api/dd');
    const data = await response.json()
    console.log(data)
    setData(data.username)
  }
  return (
    <div className='p-5'>
      <strong className='text-2xl block'>Technologies</strong><br />
      <ul className='list-disc pl-5'>
        <h1>{data}</h1>
        <li>Tailwind CSS</li>
        <li>Chakra-UI</li>
        <li>Redux-Toolkit</li>
      </ul>
      <form action="/signup" method="post">
        <input className="block mt-2 w-full px-3 py-2" type="email" name="email" placeholder="email"/>
          <input className="block mt-2 w-full px-3 py-2" type="text" name="fullname" placeholder="fullname"/>
            <input className="block mt-2 w-full px-3 py-2" type="text" name="username" placeholder="username"/>
              <input className="block mt-2 w-full px-3 py-2" type="password" name="password" placeholder="password"/>
                <a href="#" className="mt-2 inline-block font-semibold text-red-300">Forgot password?</a>

                <input className="block mt-5 w-full px-3 py-2 bg-red-400 text-white rounded-full transition-all shadow shadow-black" type="submit" value="Create new Account"/>
                  
                </form>
              </div>
              )
}

              export default App