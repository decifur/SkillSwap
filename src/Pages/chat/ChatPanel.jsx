import { Button, Input, InputGroup, InputRightElement, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsThreeDotsVertical as Dots } from "react-icons/bs";
import { MdDeleteOutline as DeleteIcon } from "react-icons/md";
import { MdReportGmailerrorred as ReportIcon } from "react-icons/md";
import { BsSend } from "react-icons/bs";
import { ImAttachment } from "react-icons/im";
import MyChat from "./MyChat";
import HisChat from "./HisChat";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

const ChatPanel = ({ chat }) => {

    const user = useSelector(e => e.user)

    const chatBox = useRef();
    useEffect(() => {
        chatBox.current.scrollTop = chatBox.current.scrollHeight;
    }, []);

    return (
        <div className="grow accent-bg flex flex-col overflow-hidden">
            <div className="h-16 shadow-[0px_0px_3px_#00000040] px-6 bg-white flex items-center justify-between">
                <div className="rounded-lg py-2 pl-1 flex gap-2 h-full">
                    <div className="overflow-hidden aspect-square h-full rounded-full">
                        <img className="block w-full h-full object-cover" src="https://img.freepik.com/premium-photo/handsome-young-businessman-shirt-eyeglasses_85574-6228.jpg" />
                    </div>
                    <div className="flex flex-col justify-center">
                        <h1 className="font-medium text-gray-800">{chat.users[0] == user.username ? chat.users[1] : chat.users[0]}</h1>
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
                {chat.conversation.map((e, i) => {
                    if (e.sender == user.username) return <MyChat key={i} message={e.message} />
                    return <HisChat key={i} message={e.message} />
                })}
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
    )
}

export default ChatPanel


