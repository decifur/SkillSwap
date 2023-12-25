import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { MdSearch } from 'react-icons/md';
import { FaRegBell } from 'react-icons/fa';

const Chat = () => {
    return (
        <div className="grow flex overflow-hidden">
            <div className="w-[330px] shadow-[0px_0px_3px_#00000040] p-3">
                <InputGroup>
                    <InputLeftElement paddingLeft={3}>
                        <MdSearch color="#808080" size="25px" />
                    </InputLeftElement>
                    <Input color="#707070" paddingBottom="2px" placeholder="Search..." borderRadius="100" />
                </InputGroup>
                <div className="flex items-center justify-between py-3 px-1">
                    <h1 className="text-xl font-medium">Messages</h1>
                    <FaRegBell size="20px" className="rotate-45" />
                </div>
                <div className='flex flex-col gap-3'>
                    <div className="accent-bg shadow-[0px_0px_2px_#00000060] h-16 rounded-lg p-2 flex gap-2">
                        <div className="overflow-hidden aspect-square h-full rounded-full">
                            <img className="block w-full h-full object-cover" src="https://img.freepik.com/premium-photo/handsome-young-businessman-shirt-eyeglasses_85574-6228.jpg" />
                        </div>
                        <div className='flex flex-col justify-center'>
                            <h1 className="font-medium text-gray-800">Darshan Zalavadiya</h1>
                            <span className='text-sm block'>How are you?</span>
                        </div>
                    </div>
                    <div className="accent-bg shadow-[0px_0px_2px_#00000060] h-16 rounded-lg p-2 flex gap-2">
                        <div className="overflow-hidden aspect-square h-full rounded-full">
                            <img className="block w-full h-full object-cover" src="https://img.freepik.com/premium-photo/handsome-young-businessman-shirt-eyeglasses_85574-6228.jpg" />
                        </div>
                        <div className='flex flex-col justify-center'>
                            <h1 className="font-medium text-gray-800">Darshan Zalavadiya</h1>
                            <span className='text-sm block'>How are you?</span>
                        </div>
                    </div>
                    <div className="accent-bg shadow-[0px_0px_2px_#00000060] h-16 rounded-lg p-2 flex gap-2">
                        <div className="overflow-hidden aspect-square h-full rounded-full">
                            <img className="block w-full h-full object-cover" src="https://img.freepik.com/premium-photo/handsome-young-businessman-shirt-eyeglasses_85574-6228.jpg" />
                        </div>
                        <div className='flex flex-col justify-center'>
                            <h1 className="font-medium text-gray-800">Darshan Zalavadiya</h1>
                            <span className='text-sm block'>How are you?</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chat;
