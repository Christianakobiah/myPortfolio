import myprofile from "../assets/img/myprofile.jpg"
// import { useState } from "react";

function About() {
    //  const [showSkills, setShowSkills] = useState(false);
    //   const [showExperience, setShowExperience] = useState(false);
    // const [showEducation, setShowEducation] = useState(false);
    //   const [showMenu, setShowMenu] = useState(false);
    return (

        <section id="about" className=" border border-gray-100 bg-gray-200">
            <h1 className="md:ml-7 text-center text-[#5f6fda] text-4xl font-bold mt-10 sm:mt-10 md:mt-10">About Me</h1>
            <div className="flex flex-col sm:flex-col md:flex-row items-center">
                <div className="border-1 rounded-full overflow-hidden shadow-[0_0_10px] mt-16 md:ml-25 sm:mb-12">
                    <img src={myprofile} className="w-55 h-55 md:w-70 md:h-70 sm:w-55 sm:h-55 object-cover" />
                </div>
                <div className="flex flex-col justify-items">
                    <p className="ml-6 md:ml-10 text-[#3f52c7] mt-3 md:mt-0 text-base leading-relaxed max-w-3xl">Hi, I’m Christiana Kobiah — a frontend developer with a strong interest in building clean and responsive websites. I’m learning and growing in technologies like HTML, CSS, JavaScript, React, and Tailwind CSS. I enjoy turning ideas into real projects and improving my skills every day.I’m also passionate about tech education and love helping others understand how digital tools work. I'm excited to keep learning and take on new challenges as I grow in the tech space.</p>

                    <div className="ml-3 md:ml-24 text-white mt-5 text-lg mb-5 md:mb-0 grid grid-cols-2 md:grid-cols-3 gap-4">
  <button className="border rounded border-gray-700 px-3 md:px-7 py-1 bg-[#5f6fda]">
    Web Developer
  </button>

  <button className="border rounded border-gray-700 px-3 md:px-7 py-1 bg-[#5f6fda] ml-2 md:mr-0 mr-2">
    Android Trainer
  </button>

  <button
    id="education-btn"
    className="border rounded border-gray-700 px-3 md:px-7 py-1 bg-[#5f6fda] col-span-2 md:col-start-2 md:col-span-1 justify-self-center"
  >
    Digital Marketer
  </button>
</div>

                </div>
            </div>
            <hr className="border-gray-300 mx-25 mt-14 pb-10"/>

        </section>

    )
};

export default About

 {/* <div
                            id="education-section"
                            // className={`text-[#3f52c7] ml-60 ${showEducation ? '' : 'hidden'}`}
                        >
                            <p className="text-[#5f6fda] text-lg font-bold mt-2 mr-5">My education</p>
                            <h1>University of Cape Coast, Ghana</h1>
                            <p>Bachelor’s Degree in Information Technology | 2017 – 2021</p>
                        </div> */}

                        {/* <button
          onClick={() => setShowMenu(!showMenu)}
          className="bg-purple-600 text-white px-4 py-2 rounded"
        >
          Toggle Menu
        // </button> */}
         // onClick={() => setShowEducation(!showEducation)}
         //  onClick={() => setShowExperience(!showExperience)}
           //  onClick={() => setShowSkills(!showSkills)}