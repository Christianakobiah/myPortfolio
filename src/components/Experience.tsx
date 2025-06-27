import rest from "../assets/img/resis.jpg";

function Experience (){
    return(
        <>
        <div id="experience" className="flex flex-col items-center">
             <img src={rest} className=" w-80 mt-15" />
                <div id="experience-section" className="ml-28 text-[#3f52c7] mt-2">
                <p className=" text-[#5f6fda] text-4xl font-bold mt-10 text-center mb-10 mr-20 ">My Experience</p>
                <div className="grid grid-cols-2">

                <div className="border-2 rounded-lg bg-gray-200 text-black border-gray-300 shadow-2xl text-center px-1 py-2 mr-20 mb-10">
                <h1 className="text-lg text-[#3f52c7]">Junior Frontend Developer </h1>
                <h1 className="mb-3 whitespace-pre-wrap">I create easy-to-use and visually appealing websites that help<br /> people have a better online experience. I focus  on making<br /> sure every design works well, looks good, and<br />  clearly shares the message. One step at a time, <br /> I turn ideas into real, working websites.</h1>
                </div>

                <div className="border-2 rounded-lg bg-gray-200 text-black border-gray-300 shadow-2xl text-center px-1 py-2 mb-10 pt-13">
                <h1>Android Trainer & Customer Support</h1>
                <h1 className="mb-3">Google Android – Remote | September 2023 – Present</h1>
                </div>
                  <div className="border-2 rounded-lg bg-gray-200 text-black border-gray-300 shadow-2xl text-center px-1 py-2 mr-20">  
                <h1>Social Media Marketer & Customer Service Representative</h1>
                <h1 className="mb-3">Lamendy Clothing – Accra, Online | March 2022 – Present</h1>
                </div>
                <div className="border-2 rounded-lg bg-gray-200 text-black border-gray-300 shadow-2xl text-center px-1 py-2">
                <h1>IT Support & Customer Service</h1>
                <h1>Lincoln Community School, Accra | October 2021 – October 2022</h1>
                </div>
                </div>
                <img src={rest} className=" w-80 mt-15 ml-78 mb-8" />
                </div>

        </div>
       
        </>
    )
}

export default Experience