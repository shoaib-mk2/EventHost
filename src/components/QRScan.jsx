

const QRScan = () => {
    return (
        <div className="md:w-4/5 md:mx-auto mb-16">
            <h1 className="text-center text-5xl font-bold">Automated QR Scanner</h1>
            <h2 className="w-3/4 mx-auto text-center text-[#8053FA] text-2xl my-10">Scan & Verify The Attendees Directly By Our QR Scanning Solution.</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="bg-[#3B47F033] p-10 rounded-3xl">
                    <img className="bg-white p-4 rounded-full" src="cursor.png" alt="" />
                    <h3 className="text-3xl font-bold mt-5">One Click</h3>
                    <p>QR Verification System</p>
                </div>
                <div className="bg-[#3B47F033] p-10 rounded-3xl">
                    <img className="bg-white p-4 rounded-full" src="qr.png" alt="" />
                    <h3 className="text-3xl font-bold mt-5">One Time</h3>
                    <p>QR Code</p>
                </div>
                <div className="bg-[#3B47F033] p-10 rounded-3xl">
                    <img className="bg-white p-4 rounded-full" src="check.png" alt="" />
                    <h3 className="text-3xl font-bold mt-5">Easy Access</h3>
                    <p>QR Easy UI</p>
                </div>
                <div className="bg-[#3B47F033] p-10 rounded-3xl">
                    <img className="bg-white p-4 rounded-full" src="mail.png" alt="" />
                    <h3 className="text-3xl font-bold mt-5">Mail</h3>
                    <p>Send Bulk Mail With Attachments</p>
                </div>
            </div>
        </div>
    );
};

export default QRScan;