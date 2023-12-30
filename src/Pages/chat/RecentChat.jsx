import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsThreeDotsVertical as Dots } from 'react-icons/bs';
import { MdDeleteOutline as DeleteIcon } from "react-icons/md";
import { MdReportGmailerrorred as ReportIcon } from "react-icons/md";
import { useSelector } from 'react-redux';

const RecentChat = ({ data, changeOpenedChat }) => {
    const user = useSelector(e => e.user)

    return (
        <div onClick={() => changeOpenedChat(data.id)} className="accent-bg shadow-[0px_0px_2px_#00000060] cursor-pointer h-16 rounded-lg p-2 flex gap-2 items-center mx-3">
            <div className="overflow-hidden aspect-square h-full shrink-0 rounded-full">
                <img className="block w-full h-full object-cover" src="https://img.freepik.com/premium-photo/handsome-young-businessman-shirt-eyeglasses_85574-6228.jpg" />
            </div>
            <div className="flex flex-col justify-center overflow-hidden">
                <h1 className="font-medium text-gray-800">{data.users[0] == user.username ? data.users[1] : data.users[0]}</h1>
                <span className="text-sm block whitespace-nowrap">{data.conversation[data.conversation.length - 1].message}</span>
            </div>
            <Menu>
                <MenuButton className="p-1 ml-auto">
                    <Dots />
                </MenuButton>
                <MenuList>
                    <MenuItem icon={<DeleteIcon size="20px" color="red" />}>Delete</MenuItem>
                    <MenuItem icon={<ReportIcon size="20px" color="red" />}>Report</MenuItem>
                </MenuList>
            </Menu>
        </div>
    );
};

export default RecentChat;
