import { FaCheckCircle } from "react-icons/fa";

const HostYourEvent = () => {
    return (
        <div>
            <div className="hero min-h-[70vh] bg-[#8053FA] md:w-4/5 md:mx-auto mb-20 rounded-[32px] relative">
                <div className="hero-content flex-col lg:flex-row gap-20">
                    <img src="hostYourEvent.png" className="" />
                    <div className="text-white">
                        <h1 className="text-5xl font-bold">Host Your Event Easily & Automatically With Us</h1>
                        <h3 className="text-3xl my-8">We Provide The Best Event Ticketing & Management Solutions</h3>
                        <p className="text-lg flex items-center py-2 gap-2"><FaCheckCircle className="text-2xl" /> <span>Host Your Event With Easy Steps!</span></p>
                        <p className="text-lg flex items-center py-2 gap-2"><FaCheckCircle className="text-2xl" /> <span>Automated Payment System & Ticket Will Be Sent To Mail.</span></p>
                        <p className="text-lg flex items-center py-2 gap-2"><FaCheckCircle className="text-2xl" /> <span>Access To Registration & Transaction Reports.</span></p>
                        <p className="text-lg flex items-center py-2 gap-2"><FaCheckCircle className="text-2xl" /> <span>Send Bulk Personalized Mail With Attachments.</span></p>
                    </div>
                </div>
                <img className="absolute rounded-r-[32px] bottom-0 right-0" src="clock.png" alt="" />
            </div>
        </div>
    );
};

export default HostYourEvent;