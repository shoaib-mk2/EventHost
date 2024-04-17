

const SimpleTicketing = () => {
    return (
        <div>
            <div className="md:w-4/5 md:mx-auto mb-24 bg-gradient-to-t from-[#F1F3FF] to-white">
                <h1 className="text-center text-5xl font-bold">Simplify Ticketing</h1>
                <h2 className="text-[#8053FA] text-2xl text-center my-7">First Ever Unique QR Ticketing Platform For Event Registration & Booking</h2>
                <div className="flex justify-center mb-9">
                    <button className="btn text-white border-none bg-gradient-to-r from-[#591BFF] to-[#7B4AFF] text-2xl"><img src="shield.png" alt="" />Secure Payment With</button>
                </div>
                <div className="flex justify-center flex-wrap">
                    <div className="bg-[#8C3494] rounded-t-[39px] w-80 relative border-2 border-white">
                        <div className="w-20 h-4 rounded-lg bg-white absolute top-4 left-[7.5rem]"></div>
                        <img className="py-40 mx-auto" src="rocket.png" alt="" />
                    </div>
                    <div className="bg-[#ED0A80] rounded-t-[39px] w-80 relative border-2 border-white">
                        <div className="w-20 h-4 rounded-lg bg-white absolute top-4 left-[7.5rem]"></div>
                        <img className="py-40 mx-auto" src="bkash.png" alt="" />
                    </div>
                    <div className="bg-gradient-to-t from-[#ED1C24] to-[#F7941D] rounded-t-[39px] w-80 relative border-2 border-white">
                        <div className="w-20 h-4 rounded-lg bg-white absolute top-4 left-[7.5rem]"></div>
                        <img className="py-40 mx-auto" src="nagad.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SimpleTicketing;