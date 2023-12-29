/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// import React from 'react'

const HomeCards = ({name, profileImg, profile, desc, skills}) => {
  return (
    <div className="flex flex-col h-52 w-[52vw] bg-inherit rounded-2xl mt-[2rem] ml-12 shadow-[0px_1px_4px_#00000070] mb-5">
      <div className="flex flex-row justify-between my-2">
        <div className="flex justify-start gap-3 mx-5">
          <img src={profileImg} alt="" className="h-[3rem] w-[3rem]"/>
          <div className="flex flex-col justify-start">
            <h1 className="text-xl font-semibold">{name}</h1>
            <h1 className="text-[0.7rem] text-black/70">{profile}</h1>
          </div>
        </div>
        <button className="btn h-[1.5rem] min-w-20 text-[0.8rem] text-white ml-auto mr-5 mt-2 rounded-2xl">Chat</button>
      </div>
      <p className="text-[0.7rem] text-black/70 w-[40vw] h-12 p-2 overflow-y-auto mx-3">{desc}</p>
      <div className="h-20 w-[48vw] bg-[#ebf2ff] rounded-2xl my-2 ml-5 overflow-x-auto">
        <h1 className="m-1.5 ml-5 text-black/60 font-semibold">Required Skills</h1>
        <div className="flex justify-start ml-5 mt-2.5 gap-4 overflow-x-auto">
          {skills.map( (skill,index)=> (
            <button className="btnn h-[1.5rem] min-w-20 over text-[0.8rem] text-white rounded-2xl" key={index}>{skill.skill}</button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HomeCards;