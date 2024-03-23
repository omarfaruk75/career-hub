import bannerImg from '../../assets/images/user.png'


const Banner = () => {
    return (
        <div className='flex flex-row justify-between items-center'>
            <div className='space-y-8 flex-1' >
                <h1 className="text-7xl font-extrabold ">One Step Closer To Your <span className="text-blue-500"> Dream Job</span></h1>

                <p className=" w-4/5 text-lg text-[#737373]">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button className="btn bg-blue-500 hover:bg-blue-900 text-white font-extrabold text-xl">Get Started</button>


            </div>
            <div className='flex-1'>
                <img src={bannerImg} alt="" />
            </div>
        </div>
    );
};

export default Banner;