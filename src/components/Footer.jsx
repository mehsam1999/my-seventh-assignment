

const Footer = () => {
    return (
        <div className="relative">
            <div className="w-5/6 border-2 rounded-xl p-4 absolute -top-32 md:-top-28 z-0 left-10 md:left-20 lg:left-40">
                <div className=" rounded-xl flex flex-col items-center justify-center text-center p-12 space-y-4 container mx-auto bg-white bg-cover bg-no-repeat"
                    style={{
                        backgroundImage: 'url(https://i.ibb.co.com/SyMcXDC/bg-shadow.png)',
                    }}>
                    <div>
                        <h2 className="font-bold text-3xl">Subscribe to our Newsletter</h2>
                        <p className="text-gray-500">Get the latest updates and news right in your inbox!</p>
                    </div>
                    <div className="flex gap-2">
                        <input
                            type="text"
                            placeholder="Enter your email"
                            className="input input-bordered w-48 lg:w-96" />
                        <button className="btn bg-gradient-to-r from-pink-400 via-orange-300 to-yellow-200 w-28">Subscribe</button> 
                    </div>
                </div>
            </div>
            <footer className="bg-dark_blue text-white p-10 ">
                <div className="flex items-center justify-center pt-56">
                    <img src="https://i.ibb.co.com/wCJC00H/logo-footer.png" alt="" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:pl-4 lg:pl-24 pt-16 gap-6 pb-14">
                    <nav>
                        <h6 className="footer-title">About Us</h6>
                        <p className="w-2/3">We are a passionate team dedicated to providing the best services to our customers.</p>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Quick Links</h6>
                        <ul
                            className="list-disc ml-6">
                            <li><a>Home</a></li>
                            <li><a>Services</a></li>
                            <li><a>About</a></li>
                            <li><a>Contact</a></li>
                        </ul>
                    </nav>
                    <form>
                        <h6 className="footer-title">Subscribe</h6>
                        <p className="text-gray-300 pb-4">Subscribe to our newsletter for the latest updates.</p>
                        <fieldset className="form-control w-80">
                            <div className="join">
                                <input
                                type="text"
                                placeholder="Enter your email"
                                className="input input-bordered join-item" />
                                <button className="btn bg-gradient-to-r from-yellow-500 via-orange-200 to-pink-400 join-item">Subscribe</button>
                            </div>
                        </fieldset>
                    </form>
                </div>
                <hr/>
                <div className="text-center pt-10">
                    <p>@2024 Your Company All Rights Reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;