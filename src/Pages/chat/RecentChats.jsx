import { BsThreeDotsVertical as Dots } from 'react-icons/bs';

const RecentChats = () => {
    return (
        <div className="accent-bg shadow-[0px_0px_2px_#00000060] cursor-pointer h-16 rounded-lg p-2 flex gap-2 items-center">
            <div className="overflow-hidden aspect-square h-full rounded-full">
                <img className="block w-full h-full object-cover" src="https://img.freepik.com/premium-photo/handsome-young-businessman-shirt-eyeglasses_85574-6228.jpg" />
            </div>
            <div className="flex flex-col justify-center">
                <h1 className="font-medium text-gray-800">Darshan Zalavadiya</h1>
                <span className="text-sm block">How are you?</span>
            </div>
            <Dots size="25" className="ml-auto hover:bg-[#00000010] p-1 rounded-full" />
        </div>
    );
};

export default RecentChats;
