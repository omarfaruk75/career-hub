import img1 from '../../assets/icons/accounts.png'
import img2 from '../../assets/icons/creative.png'
import img3 from '../../assets/icons/marketing.png'
import img4 from '../../assets/icons/chip.png'

const CategoryList = () => {
    return (
        <div className="space-y-8">
            <h2 className="text-5xl font-extrabold text-center">Job Category List</h2>
            <p className="text-lg  font-medium text-[#737373] text-center">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>

            <div className='grid md:grid-cols-4 gap-6 rounded-xl '>
                <div className='bg-blue-50 p-8 space-y-3'>
                    <img className='bg-blue-100 p-3 rounded-xl' src={img1} alt="" />
                    <h4 className='text-xl font-extrabold'>Account & Finance</h4>
                    <p className='text-base text-[#a3a3a3] '>300 Jobs Available</p>
                </div>
                <div className='bg-blue-50 p-8 space-y-3'>
                    <img className='bg-blue-100 p-3 rounded-xl' src={img2} alt="" />
                    <h4 className='text-xl font-extrabold'>Creative Design</h4>
                    <p className='text-base text-[#a3a3a3] '>100 Jobs Available</p>
                </div>
                <div className='bg-blue-50 p-8 space-y-3'>
                    <img className='bg-blue-100 p-3 rounded-xl' src={img3} alt="" />
                    <h4 className='text-xl font-extrabold'>Marketing & Sales</h4>
                    <p className='text-base text-[#a3a3a3] '>150 Jobs Available</p>
                </div>
                <div className='bg-blue-50 p-8 space-y-3'>
                    <img className='bg-blue-100 p-3 rounded-xl' src={img4} alt="" />
                    <h4 className='text-xl font-extrabold'>Engineering Job</h4>
                    <p className='text-base text-[#a3a3a3] '>224 Jobs Available</p>
                </div>



            </div>
        </div>
    );
};

export default CategoryList;