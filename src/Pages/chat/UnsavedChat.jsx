import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsCheck, BsSave, BsThreeDotsVertical as Dots } from 'react-icons/bs';
import { MdDeleteOutline as DeleteIcon } from "react-icons/md";
import { IoMdCheckmark } from "react-icons/io";

const UnsavedChat = ({ data }) => {
    return (
        <div className="accent-bg shadow-[0px_0px_2px_#00000060] cursor-pointer h-16 rounded-lg p-2 flex gap-2 items-center mx-3">
            <div className="overflow-hidden aspect-square h-full rounded-full">
                <img className="block w-full h-full object-cover" src="https://img.freepik.com/premium-photo/handsome-young-businessman-shirt-eyeglasses_85574-6228.jpg" />
            </div>
            <div className="flex flex-col justify-center">
                <h1 className="font-medium text-gray-800">{data.name}</h1>
                <span className="text-sm block">{data.message}</span>
            </div>
            <Menu>
                <MenuButton className="p-1 ml-auto">
                    <Dots />
                </MenuButton>
                <MenuList>
                    <MenuItem icon={<IoMdCheckmark size="20px" color="green" />}>Accept</MenuItem>
                    <MenuItem icon={<DeleteIcon size="20px" color="red" />}>Delete</MenuItem>
                </MenuList>
            </Menu>
        </div>
    );
}

export default UnsavedChat