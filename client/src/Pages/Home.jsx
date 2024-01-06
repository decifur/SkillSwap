/* eslint-disable no-unused-vars */
import { Input, InputGroup, InputLeftElement, InputRightElement } from "@chakra-ui/react";
import { MdSearch } from "react-icons/md";

import {useSelector} from 'react-redux';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
    const userInfo = useSelector((state) => state.user.info);
 

    return (
       <>
       
        <div className={`${userInfo.theme} w-full h-full flex `}>
           <div className='h-full w-9/12  overflow-auto flex flex-col p-2'>
           <div className='flex w-[947px] h-10 items-center gap-[60%] p-2'>
           <h1 className='text-3xl font-bold'>Active Requirements</h1>
           <button className='but p-2 text-white right-0'>new post</button>
           </div>
           <div className='flex w-[947px] h-[300px]  rounded-lg flex-col my-5 p-3'>
           <div className='w-full flex justify-between '>
            <div className='flex h-24 items-center  gap-5'>
                <img src="/public/assets/boy1.png" width={90} height={50} alt="" />
               <div> <h1 className='text-4xl font-bold'>John Doe </h1>
                <p className='text-sm'>Fullstack Developer</p></div>
            </div>
            <button className='but h-10 w-20 text-white right-1'> chat</button>
           </div>
           <div className='my-5 w-10/12 p-3'>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took</p>
           </div>
           <div>
            <h1>Required Skills</h1>
            <div className='flex items-center gap-5 my-2'>
            <button className='but1 px-5 py-1 rounded-3xl text-white'>react</button>
            <button className='but1 px-5 py-1 rounded-3xl text-white'>node</button>
            <button className='but1 px-5 py-1 rounded-3xl text-white'>html</button>
            </div>
           </div>
           </div>
           <div className='flex w-[947px] h-[300px]  rounded-lg flex-col my-5 p-3'>
           <div className='w-full flex justify-between '>
            <div className='flex h-24 items-center  gap-5'>
                <img src="/public/assets/boy1.png" width={90} height={50} alt="" />
               <div> <h1 className='text-4xl font-bold'>John Doe</h1>
                <p className='text-sm'>Fullstack Developer</p></div>
            </div>
            <button className='but h-10 w-20 text-white right-1'> chat</button>
           </div>
           <div className='my-5 w-10/12 p-3'>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took</p>
           </div>
           <div>
            <h1>Required Skills</h1>
            <div className='flex items-center gap-5 my-2'>
            <button className='but1 px-5 py-1 rounded-3xl text-white'>react</button>
            <button className='but1 px-5 py-1 rounded-3xl text-white'>node</button>
            <button className='but1 px-5 py-1 rounded-3xl text-white'>html</button>
            </div>
           </div>
           </div>
           <div className='flex w-[947px] h-[300px]  rounded-lg flex-col my-5 p-3'>
           <div className='w-full flex justify-between '>
            <div className='flex h-24 items-center  gap-5'>
                <img src="/public/assets/boy1.png" width={90} height={50} alt="" />
               <div> <h1 className='text-4xl font-bold'>John Doe</h1>
                <p className='text-sm'>Fullstack Developer</p></div>
            </div>
            <button className='but h-10 w-20 text-white right-1'> chat</button>
           </div>
           <div className='my-5 w-10/12 p-3'>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took</p>
           </div>
           <div>
            <h1>Required Skills</h1>
            <div className='flex items-center gap-5 my-2'>
            <button className='but1 px-5 py-1 rounded-3xl text-white'>react</button>
            <button className='but1 px-5 py-1 rounded-3xl text-white'>node</button>
            <button className='but1 px-5 py-1 rounded-3xl text-white'>html</button>
            </div>
           </div>
           </div>
           </div>


           <div className='h-full w-3/12 flex justify-center bg-orange-00 py-8 p-4'>
            {/* <div><h1 className='text-xl font-bold'>Post Requirement</h1></div> */}
            <div className='w-full h-[60%]  flex flex-col  gap-5 px-3 py-7'>
            <h1 className='text-xl font-bold '>Post Requirement</h1>
              <InputGroup>
                          <InputLeftElement paddingLeft={3}>
                              <MdSearch color="#808080" size="25px" />
                          </InputLeftElement>
                          <Input color="#707070" paddingBottom="2px" placeholder="Search..." borderRadius="100" />
                      </InputGroup>
              <form className='flex flex-col gap-3' action="/post" method="post">
                <input className='w-full' type="search" name="search" placeholder='search' id="" />
                <input className='w-full' type="text" placeholder='Added Skills '/>
                <input className='w-full mb-24' type="tel" name="description" id="" placeholder='Description' />
              </form>
              <button className='but ml-36 px-5 w-6/12 text-white py-2'>Post</button>
            </div>
        
           </div>
        </div>
       </>
    );
};

export default Home;
