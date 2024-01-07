const HisChat = ({ message }) => {
    return (
        <div className="flex my-2 gap-3">
            <div className="h-10 aspect-square overflow-hidden rounded-full">
                <img className="blockm w-full h-full object-cover" src="https://img.freepik.com/premium-photo/handsome-young-businessman-shirt-eyeglasses_85574-6228.jpg" />
            </div>
            <div className="flex max-w-[60%] break-all">
                <div className="pt-[2px]">
                    <div className="px-4 py-[6px] bg-blue-500 text-white rounded-[18px]">{message}</div>
                </div>
            </div>
        </div>
    );
};

export default HisChat;
