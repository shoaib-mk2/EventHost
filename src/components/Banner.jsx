

const Banner = () => {
    return (
        <div>
            <div className="hero rounded-[32px] min-h-[60vh] md:w-4/5 md:mx-auto mb-16" style={{ backgroundImage: 'url(banner.png)', backgroundSize: 'cover' }}>
                <div className="hero-overlay bg-opacity-30 rounded-[32px] min-h-[60vh]"></div>
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className='text-transparent text-5xl font-bold hidden lg:flex'>Ahh!! you got me!! feels bad man!</div>
                    <div>
                        <h1 className="text-5xl font-bold text-white">CMA Fest</h1>
                        <p className="py-6 text-xl text-white">Make memories that will last a lifetime. See your favorite artists live at CMA Fest!</p>
                        <div className='flex items-center'>
                            <button className="btn text-white border-none bg-gradient-to-r from-[#591BFF] to-[#7B4AFF]"><img src="bannerBtnTicket.png" alt="" />Get Ticket</button>
                            <button className="btn btn-outline text-white ml-4">Explore All Events</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;