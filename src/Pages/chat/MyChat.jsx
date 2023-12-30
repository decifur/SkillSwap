const MyChat = ({ message }) => {
    return (
        <div className="flex my-2">
            <div className="grow"></div>
            <div className="max-w-[60%] break-all px-3 py-1 bg-blue-500 text-white rounded-2xl">{message}</div>
        </div>
    );
};

export default MyChat;