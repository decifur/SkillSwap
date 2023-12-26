import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { MdSearch } from "react-icons/md";
import { FaRegBell } from "react-icons/fa";
import RecentChat from "./RecentChat";
import { useState } from "react";
import UnsavedChat from "./UnsavedChat";
import ChatPanel from "./ChatPanel";
import { useSelector } from "react-redux";

const Chat = () => {

    const [showUnsavedChats, setShowUnsavedChats] = useState(false);
    const chats = useSelector(e => e.user.chats)
    const [openedChat, setOpenedChat] = useState(chats[0])

    function changeOpenedChat(chat_id) {
        chats.forEach(e=> e.id === chat_id && setOpenedChat(e))
    }

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
                        <div className={`rounded-full p-[6px] ${showUnsavedChats && 'bg-gray-200'}`}>
                            <FaRegBell size="20px" className="rotate-45" />
                        </div>
                    </div>
                </div>
                <div className="overflow-hidden grow">
                    <div className={`flex transition duration-500 h-full ${showUnsavedChats && "translate-x-[-100%]"}`}>
                        <div className="flex flex-col gap-3 w-full h-full shrink-0 overflow-auto">
                            {chats.map((e, i) => {
                                return <RecentChat key={i} data={e} changeOpenedChat={changeOpenedChat} />
                            })}
                        </div>
                        <div className="w-full shrink-0 flex flex-col gap-3">
                            <UnsavedChat data={{ name: 'Alia Bhat', message: `Check me out` }} />
                            <UnsavedChat data={{ name: 'Uckiya Alu', message: 'Hey' }} />
                        </div>
                    </div>
                </div>
            </div>
            <ChatPanel chat={openedChat} />
        </div>
    );
};

export default Chat;
