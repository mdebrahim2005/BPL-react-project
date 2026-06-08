import React from 'react';
import bg from "../assets/bg-shadow.png";
import banner from "../assets/banner-main.png";
const Banner = () => {
    return (

        <div>
            <div className="hero  min-h-[50vh] rounded-3xl bg-[#131313] bg-cover 
            bg-center bg-no-repeat  container mx-auto  overflow-hidden "
           style={{ backgroundImage: `url(${bg})` }}

>

  <div className="hero-content text-neutral-content text-center">
    <div className=" ">
        <div className='flex justify-center mb-6 '>
            <img src={banner} alt="logo" className=" " />
        </div>
     
      <h1 className="mb-5 text-4xl  font-Sora font-extrabold">
      Assemble Your Ultimate Dream 11 Cricket Team
      </h1>
      <p className=' text-gray-500 text-2xl mb-6'>
         Beyond Boundaries Beyond Limits
      </p>
    <button className="btn bg-[#E7FE29] text-black font-extrabold rounded-[10px] text-lg px-6 py-3 border-none  outline outline-3 outline-[#E7FE29] outline-offset-6 hover:bg-[#d2ec0c] transition-all duration-300">
    Claim Free Credit
</button>
    </div>
  </div>
       </div>

            
        </div>
    );
};

export default Banner;