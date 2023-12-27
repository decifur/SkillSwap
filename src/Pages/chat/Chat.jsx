import { Button, Input, InputGroup, InputLeftElement, InputRightElement, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { MdSearch } from "react-icons/md";
import { FaRegBell } from "react-icons/fa";
import RecentChats from "./RecentChats";
import { BsThreeDotsVertical as Dots } from "react-icons/bs";
import { MdDeleteOutline as DeleteIcon } from "react-icons/md";
import { MdReportGmailerrorred as ReportIcon } from "react-icons/md";
import { BsSend } from "react-icons/bs";
import { ImAttachment } from "react-icons/im";
import MyChat from "./MyChat";
import HisChat from "./HisChat";
import { useEffect, useRef, useState } from "react";

const Chat = () => {
    const chatBox = useRef();
    const [showUnsavedChats, setShowUnsavedChats] = useState(false);

    useEffect(() => {
        chatBox.current.scrollTop = chatBox.current.scrollHeight;
    }, []);

    return (
        <div className="grow flex overflow-hidden">
            <div className="w-[330px] shadow-[0px_0px_3px_#00000040] py-3 relative select-none flex flex-col">
                <div className="mx-3">
                    <InputGroup>
                        <InputLeftElement paddingLeft={3}>
                            <MdSearch color="#808080" size="25px" />
                        </InputLeftElement>
                        <Input color="#707070" paddingBottom="2px" placeholder="Search..." borderRadius="100" />
                    </InputGroup>
                </div>
                <div className="flex items-center justify-between py-3 px-4">
                    <h1 className="text-xl font-medium">{showUnsavedChats ? 'Unsaved Chats' : 'Messages'}</h1>
                    <div onClick={() => { setShowUnsavedChats(!showUnsavedChats) }} className="relative cursor-pointer" >
                        <div className="absolute aspect-square w-2 rounded-full bottom-[60%] right-[40%] bg-red-500 z-10"></div>
                        <div className={`rounded-full p-1 ${showUnsavedChats && 'bg-gray-300'}`}>
                            <FaRegBell size="20px" className="rotate-45" />
                        </div>
                    </div>
                </div>
                <div className="overflow-hidden grow">
                    <div className={`flex transition duration-500 h-full ${showUnsavedChats && "translate-x-[-100%]"}`}>
                        <div className="flex flex-col gap-3 w-full h-full shrink-0 overflow-auto">
                            <RecentChats data={{ name: 'Darshan Zalvadiya', message: 'How are you?' }} />
                            <RecentChats data={{ name: 'Aarsan Adiya', message: `What's up` }} />
                            <RecentChats data={{ name: 'Adittya Sharma', message: `Hello` }} />
                            <RecentChats data={{ name: 'Munafir Rahman', message: `Hey, can we talk` }} />
                        </div>
                        <div className="w-full shrink-0 flex flex-col gap-3">
                            <RecentChats data={{ name: 'Alia Bhat', message: `I want to have a child` }} />
                            <RecentChats data={{ name: 'Fuckiya Alu', message: 'Hey' }} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="grow accent-bg flex flex-col overflow-hidden">
                <div className="h-16 shadow-[0px_0px_3px_#00000040] px-6 bg-white flex items-center justify-between">
                    <div className="rounded-lg py-2 pl-1 flex gap-2 h-full">
                        <div className="overflow-hidden aspect-square h-full rounded-full">
                            <img className="block w-full h-full object-cover" src="https://img.freepik.com/premium-photo/handsome-young-businessman-shirt-eyeglasses_85574-6228.jpg" />
                        </div>
                        <div className="flex flex-col justify-center">
                            <h1 className="font-medium text-gray-800">Darshan Zalavadiya</h1>
                            <span className="text-sm block">Online</span>
                        </div>
                    </div>
                    <Menu>
                        <MenuButton className="p-1">
                            <Dots />
                        </MenuButton>
                        <MenuList>
                            <MenuItem icon={<DeleteIcon size="20px" color="red" />}>Delete</MenuItem>
                            <MenuItem icon={<ReportIcon size="20px" color="red" />}>Report</MenuItem>
                        </MenuList>
                    </Menu>
                </div>
                <div ref={chatBox} className="grow flex flex-col px-9 overflow-auto">
                    <div className="grow"></div>
                    <MyChat message="Hello!?" />
                    <HisChat message="Hi! Whats up buddy" />
                    <MyChat message="Good !" />
                    <MyChat message="What about you?" />
                    <HisChat message="Hi! I'm also doing good" />
                    <MyChat message="Good, lets not talk ever again" />
                </div>
                <div className="h-[85px] py-5  px-7 flex gap-3 mt-5">
                    <InputGroup>
                        <Input className="placeholder:text-gray-700 focus:bg-[#00000005]" placeholder="Message..." h="100%" borderRadius="50px" bg="#00000015" />
                        <InputRightElement className="pr-2 pt-1">
                            <ImAttachment size="20" cursor="pointer" />
                        </InputRightElement>
                    </InputGroup>
                    <Button colorScheme="blue" position="relative" borderRadius="200px" aspectRatio="1/1">
                        <BsSend className="absolute" size="20px" color="white" />
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Chat;
