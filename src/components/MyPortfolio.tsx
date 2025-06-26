import assignpor from "../assets/img/mylogo-removebg-preview.png";
import forpot from "../assets/img/forpot.png";
import advertise from "../assets/img/advertise.png";
import cloth from "../assets/img/cloth-1.png";
import evhive from "../assets/img/evhive.png";
import bookie from "../assets/img/bookie.png";
import myprofile from "../assets/img/myprofile.jpg";
import profile2 from "../assets/img/myprofile2.jpg";
import profile3 from "../assets/img/myprofile3.jpg";


function MyPortfolio (){
    return(
        <>
          <section className=" border border-gray-100 mt-8 bg-gray-200 pt-10">
            <h1 className="text-center text-5xl font-medium text-[#283DBA] mb-8">This Is My Portfolio</h1>
            <div className="flex flex-row justify-around">
           <a href="https://landingpage-assignment-eosin.vercel.app/"> 
            <div className="border-2 border-[rgba(63,82,199,0.3)] h-60 w-80 bg-[rgba(63,82,199,0.7)] shadow-[0_0_20px] ml-10 mb-8">
                <h1 className="text-white font-bold text-center mt-8">Click to visit my shop</h1>
                <img src={cloth} className="h-35 w-35 ml-21" />
                
            </div>
            </a>

             <a href="https://team-strawberry-bel8.vercel.app/"> 
            <div className="border-2 border-[rgba(63,82,199,0.3)] h-60 w-80 bg-[rgba(63,82,199,0.7)] shadow-[0_0_20px]">
                <h1 className="text-white font-bold text-center mt-8"> View my form</h1>
                <img src={forpot} className="h-30 w-30 border border-rounded-2xl ml-24 mt-5" />
                
            </div>
            </a>

             <a href="https://portfolio-zeta-coral-56.vercel.app/"> 
            <div className="border-2 border-[rgba(63,82,199,0.3)] h-60 w-80 bg-[rgba(63,82,199,0.7)] shadow-[0_0_20px]">
                <h1 className="text-white font-bold text-center mt-8">Click to visit my portfolio</h1>
                <img src={advertise}  className="h-35 w-35 ml-21 border border-black" />
                
            </div>
            </a>
            </div>
            <div className="flex flex-row justify-around">
           <a href="https://landingpage-assignment-eosin.vercel.app/"> 
            <div className="border-2 border-[rgba(63,82,199,0.3)] h-60 w-80 bg-[rgba(63,82,199,0.7)] shadow-[0_0_20px] ml-10 mb-8">
                <h1 className="text-white font-bold text-center mt-8">Click to visit my shop</h1>
                <img src={assignpor} className="h-60 w-60 ml-8" />
                
            </div>
            </a>

             <a href="https://team-strawberry-bel8.vercel.app/"> 
            <div className="border-2 border-[rgba(63,82,199,0.3)] h-60 w-80 bg-[rgba(63,82,199,0.7)] shadow-[0_0_20px]">
                <h1 className="text-white font-bold text-center mt-8"> View my form</h1>
                <img src={bookie} className="h-30 w-30 border border-rounded-2xl ml-24 mt-5" />
                
            </div>
            </a>

             <a href="https://portfolio-zeta-coral-56.vercel.app/"> 
            <div className="border-2 border-[rgba(63,82,199,0.3)] h-60 w-80 bg-[rgba(63,82,199,0.7)] shadow-[0_0_20px]">
                <h1 className="text-white font-bold text-center mt-8">Click to visit my portfolio</h1>
                <img src={evhive}  className="h-35 w-35 ml-21" />
                
            </div>
            </a>
            </div>

        </section>
        </>
    )
}

export default MyPortfolio