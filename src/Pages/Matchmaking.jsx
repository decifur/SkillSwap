
const Matchmaking = () => {
  return (
    <>
      <div className="w-full h-full flex ">
        <div className="w-[70%] h-[90%] bg-blue-50 flex m-9 rounded-2xl flex-col gap-5 items-center justify-center">
        <div className="w-[600px] h-[200px] flex items-center  justify-between ">
          <div className="bg-red-400 w-[120px] h-[120px] rounded-full"><img src="/assets/boy1.png" alt="" /></div>
          <div className=" w-[120px] h-[120px] items-center justify-center">
            <div className="py-7"><img src="/assets/ss.svg" alt=""/>
            </div>  
            </div>
          <div className="bg-red-400 w-[120px] h-[120px] rounded-full"><img src="/assets/girl1.png" alt="" /></div>
        </div>
        <div className="w-[600px] h-[90px] ">
          <h1 className="text-center">Matched Skills</h1>
          <div className=" h-10 mt-3 text-slate-200 flex justify-center items-center ">
            <button type="button" className="mx-5 my-2 bg-orange-600 rounded-lg px-5">react</button>
            <button type="button" className="mx-5 my-2 bg-orange-600 rounded-lg px-5">html</button>
            <button type="button" className="mx-5 my-2 bg-orange-600 rounded-lg px-5">css</button>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center my-10 w-52"> 
          <div className="bg-red-200 w-full h-10 text-center  my-2 flex items-center justify-center  rounded-xl ">Send Message✨</div>
          <div className="bg-red-200 w-full h-10 text-center  my-2 flex items-center justify-center  rounded-xl ">Request Rematch</div>
        </div>
        </div>
        <div className="w-[30%] h-full bg-gray-200"></div>
      </div>
    </>
  )
}

export default Matchmaking