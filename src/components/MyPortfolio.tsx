import assignpor from "../assets/img/mylogo-removebg-preview.png";
import forpot from "../assets/img/forpot.png";
import advertise from "../assets/img/advertise.png";
import cloth from "../assets/img/cloth-1.png";
import evhive from "../assets/img/evhive.png";
import bookie from "../assets/img/bookie.png";


function MyPortfolio() {
    return (
        <>
            <section id="portfolio" className=" bg-gray-200 pt-10">
                <h1 className="text-center text-4xl md:text-5xl font-medium text-[#283DBA] mb-8">This Is My Portfolio</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 ml-4 md:ml-24 md:max-w-5xl sm:max-w-3xl">
                    <div className="sm:mr-50">
                        <a href="https://landingpage-assignment-eosin.vercel.app/">
                            <div className="border-2 border-[rgba(63,82,199,0.3)] h-60 w-80 bg-[rgba(63,82,199,0.7)] shadow-[0_0_20px] ml-7 sm:ml-0 md:ml-10 mb-8 sm:h-60 sm:w-70">
                                <h1 className="text-white font-bold text-center mt-8">Click to visit my shop</h1>
                                <img src={cloth} className="h-35 w-35 ml-21" />

                            </div>
                        </a>
                    </div>
                    <div className="sm:ml-15">

                        <a href="https://team-strawberry-bel8.vercel.app/">
                            <div className="border-2 border-[rgba(63,82,199,0.3)] h-60 w-80 bg-[rgba(63,82,199,0.7)] shadow-[0_0_20px] ml-7 sm:h-60 sm:w-70 ">
                                <h1 className="text-white font-bold text-center mt-8"> View my form</h1>
                                <img src={forpot} className="h-30 w-30 border border-rounded-2xl ml-24 mt-5" />

                            </div>
                        </a>
                    </div>

                    <div className="sm:ml-35">
                        <a href="https://portfolio-zeta-coral-56.vercel.app/">
                            <div className="border-2 border-[rgba(63,82,199,0.3)] h-60 w-80 bg-[rgba(63,82,199,0.7)] shadow-[0_0_20px] mt-8 ml-7 md:ml-0 md:mt-0 sm:h-60 sm:w-70">
                                <h1 className="text-white font-bold text-center mt-8">View advertisement platform</h1>
                                <img src={advertise} className="h-35 w-35 ml-21 border border-black" />

                            </div>
                        </a>
                    </div>

                    <div className="">
                        <a href="https://landingpage-assignment-eosin.vercel.app/">
                            <div className="border-2 border-[rgba(63,82,199,0.3)] h-60 w-80 bg-[rgba(63,82,199,0.7)] shadow-[0_0_20px] ml-6 md:ml-10 mb-8 md:mt-0 mt-8 sm:h-60 sm:w-70">
                                <h1 className="text-white font-bold text-center mt-8">Click to visit my shop</h1>
                                <img src={assignpor} className="h-60 w-60 ml-8" />
                            </div>
                        </a>
                    </div>
                    <div className="sm:ml-15">
                        <a href="https://team-strawberry-bel8.vercel.app/">
                            <div className="border-2 border-[rgba(63,82,199,0.3)] h-60 w-80 bg-[rgba(63,82,199,0.7)] shadow-[0_0_20px] mb-8 ml-7 md:ml-7 md:mb-0 sm:h-60 sm:w-70 ">
                                <h1 className="text-white font-bold text-center mt-8"> View my library</h1>
                                <img src={bookie} className="h-30 w-30 border border-rounded-2xl ml-24 mt-5" />

                            </div>
                        </a>
                    </div>
                    <div className="sm:ml-35">
                        <a href="https://portfolio-zeta-coral-56.vercel.app/">
                            <div className="border-2 border-[rgba(63,82,199,0.3)] h-60 w-80 bg-[rgba(63,82,199,0.7)] shadow-[0_0_20px] md:ml-0 ml-7 md:mb-0 mb-8 sm:h-60 sm:w-70">
                                <h1 className="text-white font-bold text-center mt-8">Click to see EventHive</h1>
                                <img src={evhive} className="h-35 w-35 ml-21" />

                            </div>
                        </a>
                    </div>

                </div>
                  <hr className="border border-gray-400 mx-3 mt-7"/>
            </section>
        </>
    )
}

export default MyPortfolio