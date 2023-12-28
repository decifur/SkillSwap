import Cards from "../constants/Activecards";
import { HomeCards } from "../components";

const home = () => {
  return (
    <div className="flex flex-row justify-start gap-12">
        {/* !st part */}
        <div className="flex flex-col h-[95vh] w-[63vw] bg-inherit rounded-2xl mt-[2rem] ml-12 shadow-[0px_1px_4px_#00000070]">
            <div className="flex justify-between">
                <h1 className="text-2xl font-semibold text-black/60 m-5 pl-5">Active Requirements</h1>
                <button className="btn h-7 w-[6rem] text-sm text-white mr-[6.2rem] mt-5 rounded-2xl">New Post</button>
            </div>
            <div className=" overflow-y-auto overflow-x-hidden mb-3">
                {Cards.map( (item) => (
                    <HomeCards 
                        key={item.id}
                        name={item.name}
                        profileImg={item.profileImg}
                        profile={item.profile}
                        desc={item.desc}
                        skills={item.skills}
                    />
                ))}
            </div>
        </div>
        {/* 2nd part */}
        <div className="flex flex-col justify-start h-[58vh] w-[23vw] bg-[#ebf2ff] shadow-[0px_1px_4px_#00000070] mt-[2rem] rounded-2xl">
            <h1 className="text-black/60 text-xl font-semibold mx-4 my-5">Post Requirement</h1>
            <input className=" p-[0.3rem] px-4 rounded-2xl w-[21vw] mx-3 -mt-2" placeholder="Search Skills..."/>
            <textarea className=" p-2 rounded-2xl w-[21vw] h-[15vh] mx-3 mt-4" placeholder="Added skills"/>
            <textarea className=" p-2 rounded-2xl w-[21vw] h-[15vh] mx-3 mt-4" placeholder="Desciption"/>
            <button className="btn h-7 w-[6rem] text-sm text-white ml-[12.6rem] mr-20 mt-5 rounded-2xl">Post</button>
        </div>
    </div>
  )
}

export default home;