import { FaLocationDot } from "react-icons/fa6";

const Events = () => {
    return (
        <div>
            <div className="md:w-4/5 md:mx-auto mb-24">
                <h1 className="text-center text-5xl font-bold mb-8">Events</h1>
                <div className="flex flex-wrap justify-center gap-2 mb-10">
                    <p className="px-5 py-2 text-lg rounded-xl inline">All</p>
                    <p className="px-5 py-2 text-lg rounded-xl inline">For you</p>
                    <p className="px-5 py-2 text-lg rounded-xl inline">This Day</p>
                    <p className="px-5 py-2 text-lg rounded-xl inline">This Week</p>
                    <p className="px-5 py-2 text-lg rounded-xl inline bg-gradient-to-r from-[#591BFF] to-[#7B4AFF] text-white">Music</p>
                    <p className="px-5 py-2 text-lg rounded-xl inline">Union</p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                    <div className="card w-full bg-[#003ACF1A] shadow-xl">
                        <div className="w-6 bg-white text-white z-10 absolute top-[20.3rem] -left-3 rounded-full">k</div>
                        <div className="w-6 bg-white text-white z-10 absolute top-[20.3rem] -right-3 rounded-full">k</div>
                        <figure className="px-5 py-5 border-b-2 border-opacity-30 border-[#591BFF] border-dashed relative">
                            <img src="event1.png" alt="Shoes" className="rounded-xl w-full" />
                            <p className="px-4 py-1 rounded-[4px] inline bg-gradient-to-r from-[#591BFF] to-[#7B4AFF] text-white absolute top-8 left-8">Online</p>
                            <p className="px-4 py-1 rounded-[4px] inline bg-gradient-to-r from-[#591BFF] to-[#7B4AFF] text-white absolute top-8 right-8"><img className="inline-flex mr-2" src="heart.png" alt="" />Favorite</p>
                        </figure>
                        <div className="px-5 py-5 relative">
                            <p className="text-center p-2 bg-white absolute right-4 rounded-lg"><span className="text-sm">April</span><br /><span className="text-[#591BFF] font-bold text-3xl">20</span><br /><span className="text-sm">10:00 PM</span></p>
                            <p className="px-4 py-1 text-xs rounded-[4px] inline bg-gradient-to-r from-[#591BFF] to-[#7B4AFF] text-white">Music</p>
                            <p><FaLocationDot className="text-[#7B4AFF] inline-flex my-4"></FaLocationDot> Celebrity Convention Hall</p>
                            <h2 className="card-title text-2xl mb-4">Roufian’s HSC-24 Rag Day</h2>
                            <div className='flex items-center justify-between'>
                                <div className="flex items-center gap-3">
                                    <button className="btn text-white border-none bg-gradient-to-r from-[#591BFF] to-[#7B4AFF]"><img src="bannerBtnTicket.png" alt="" />Get Ticket</button>
                                    <button className="btn btn-outline bg-white border-none"><span className="text-[#591BFF] font-bold text-2xl">20</span> Seats<br />Left</button>
                                </div>
                                <p className="text-[#591BFF] mr-0">See more</p>
                            </div>
                        </div>
                    </div>
                    <div className="card w-full bg-[#003ACF1A] shadow-xl">
                        <div className="w-6 bg-white text-white z-10 absolute top-[20.3rem] -left-3 rounded-full">k</div>
                        <div className="w-6 bg-white text-white z-10 absolute top-[20.3rem] -right-3 rounded-full">k</div>
                        <figure className="px-5 py-5 border-b-2 border-opacity-30 border-[#591BFF] border-dashed">
                            <img src="event2.png" alt="Shoes" className="rounded-xl w-full" />
                            <p className="px-4 py-1 rounded-[4px] inline bg-gradient-to-r from-[#591BFF] to-[#7B4AFF] text-white absolute top-8 left-8">Online</p>
                            <p className="px-4 py-1 rounded-[4px] inline bg-gradient-to-r from-[#591BFF] to-[#7B4AFF] text-white absolute top-8 right-8"><img className="inline-flex mr-2" src="heart.png" alt="" />Favorite</p>
                        </figure>
                        <div className="px-5 py-5 relative">
                            <p className="text-center p-2 bg-white absolute right-4 rounded-lg"><span className="text-sm">April</span><br /><span className="text-[#591BFF] font-bold text-3xl">20</span><br /><span className="text-sm">10:00 PM</span></p>
                            <p className="px-4 py-1 text-xs rounded-[4px] inline bg-gradient-to-r from-[#591BFF] to-[#7B4AFF] text-white">Music</p>
                            <p><FaLocationDot className="text-[#7B4AFF] inline-flex my-4"></FaLocationDot> Celebrity Convention Hall</p>
                            <h2 className="card-title text-2xl mb-4">Roufian’s HSC-24 Rag Day</h2>
                            <div className='flex items-center justify-between'>
                                <div className="flex items-center gap-3">
                                    <button className="btn text-white border-none bg-gradient-to-r from-[#591BFF] to-[#7B4AFF]"><img src="bannerBtnTicket.png" alt="" />Get Ticket</button>
                                    <button className="btn btn-outline bg-white border-none"><span className="text-[#591BFF] font-bold text-2xl">20</span> Seats<br />Left</button>
                                </div>
                                <p className="text-[#591BFF] mr-0">See more</p>
                            </div>
                        </div>
                    </div>
                    <div className="card w-full bg-[#003ACF1A] shadow-xl">
                        <div className="w-6 bg-white text-white z-10 absolute top-[20.3rem] -left-3 rounded-full">k</div>
                        <div className="w-6 bg-white text-white z-10 absolute top-[20.3rem] -right-3 rounded-full">k</div>
                        <figure className="px-5 py-5 border-b-2 border-opacity-30 border-[#591BFF] border-dashed">
                            <img src="event3.png" alt="Shoes" className="rounded-xl w-full" />
                            <p className="px-4 py-1 rounded-[4px] inline bg-gradient-to-r from-[#591BFF] to-[#7B4AFF] text-white absolute top-8 left-8">Online</p>
                            <p className="px-4 py-1 rounded-[4px] inline bg-gradient-to-r from-[#591BFF] to-[#7B4AFF] text-white absolute top-8 right-8"><img className="inline-flex mr-2" src="heart.png" alt="" />Favorite</p>
                        </figure>
                        <div className="px-5 py-5 relative">
                            <p className="text-center p-2 bg-white absolute right-4 rounded-lg"><span className="text-sm">April</span><br /><span className="text-[#591BFF] font-bold text-3xl">20</span><br /><span className="text-sm">10:00 PM</span></p>
                            <p className="px-4 py-1 text-xs rounded-[4px] inline bg-gradient-to-r from-[#591BFF] to-[#7B4AFF] text-white">Music</p>
                            <p><FaLocationDot className="text-[#7B4AFF] inline-flex my-4"></FaLocationDot> Celebrity Convention Hall</p>
                            <h2 className="card-title text-2xl mb-4">Roufian’s HSC-24 Rag Day</h2>
                            <div className='flex items-center justify-between'>
                                <div className="flex items-center gap-3">
                                    <button className="btn text-white border-none bg-gradient-to-r from-[#591BFF] to-[#7B4AFF]"><img src="bannerBtnTicket.png" alt="" />Get Ticket</button>
                                    <button className="btn btn-outline bg-white border-none"><span className="text-[#591BFF] font-bold text-2xl">20</span> Seats<br />Left</button>
                                </div>
                                <p className="text-[#591BFF] mr-0">See more</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Events;