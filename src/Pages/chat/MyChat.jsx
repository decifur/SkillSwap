const MyChat = ({ message }) => {
    return (
        <div className="flex my-2">
            <div className="grow"></div>
            <div className="max-w-[60%] break-all px-4 py-[6px] bg-blue-500 text-white rounded-[18px]">{message}</div>
        </div>
    );
};

export default MyChat;