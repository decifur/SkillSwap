/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState('');

  useEffect(()=>{
    fetchData()
  },[])

async function fetchData () {
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
      <div className="w-full h-screen  flex items-center justify-center  bg-[url('/images/wws.png')] bg-center bg-clip-content bg-cover">
    <div className="w-80 h-[70vh]  bg-zinc-100 px-4 py-5 text-center rounded-md shadow-lg shadow-slate-100">
      <img src="/images/logo.png" className="h-12 w-12 object-cover rounded-full"alt="" width="50" style=" margin: 0 110px;"/>
      <h5 className="font-semibold">Welcome TO Godcraft</h5>
      <form action="/signup" method="post">
        <input className="block mt-2 w-full px-3 py-2" type="email" name="email" placeholder="email"/>
        <input className="block mt-2 w-full px-3 py-2" type="text" name="fullname" placeholder="fullname"/>
        <input className="block mt-2 w-full px-3 py-2" type="text" name="username" placeholder="username"/>
        <input className="block mt-2 w-full px-3 py-2" type="password" name="password" placeholder="password"/>
        {/* <!-- <a href="#" class="mt-2 inline-block font-semibold text-red-300">Forgot password?</a> --> */}
  
        <input className="block mt-5 w-full px-3 py-2 bg-red-400 text-white rounded-full transition-all shadow shadow-black" type="submit" value="Create new Account"/>
        <div className="mt-1">or</div>
        <a href="/" className="block mt-0 w-full px-3 py-2 bg-blue-500 text-white rounded-full transition-all shadow shadow-black">Login</a>
      </form>
      
    </div>
  </div>
    </div>
    
  )
}

export default App