import myprofile from "../assets/img/myprofile.jpg"
import { useState } from "react";

function About() {
    //  const [showSkills, setShowSkills] = useState(false);
    //   const [showExperience, setShowExperience] = useState(false);
    const [showEducation, setShowEducation] = useState(false);
    //   const [showMenu, setShowMenu] = useState(false);
    return (

        <section id="about" className=" border border-gray-100 mt-16 bg-gray-100">
            <div className="flex flex-row items-center">
                <div className="border-1 rounded-full overflow-hidden shadow-[0_0_10px] mt-16 ml-25">
                    <img src={myprofile} className="w-70 h-70 object-cover" />
                </div>
                <div className="flex flex-col justify-items">
                    <h1 className="ml-10 text-5xl font-medium text-[#283DBA] mt-20">About Me</h1>
                    <p className=" ml-10 text-[#3f52c7] mt-3">Hi, I’m Christiana Kobiah — a junior frontend developer with a strong interest in building clean and responsive websites.  </p>
                    <p className=" ml-10 text-[#3f52c7]">I’m learning and growing in technologies like HTML, CSS, JavaScript, React, and Tailwind CSS.
                        I enjoy turning ideas into real projects and improving my skills every day.</p>

                    <p className="ml-10 text-[#3f52c7]">I’m also passionate about tech education and love helping others understand how digital tools work. I'm excited to keep learning and take on new challenges as I grow in the tech space.</p>

                    <div className="ml-10 text-white mt-5 text-lg">
                        <a href="#skills"><button
                            //  onClick={() => setShowSkills(!showSkills)}
                             className="border rounded border-gray-700 px-3 py-1 bg-[#5f6fda] cursor-pointer "> Skills</button>
                            </a>
                            <a href="#experience">
                        <button
                            //  onClick={() => setShowExperience(!showExperience)}
                             className="border rounded border-gray-700 px-3 py-1 bg-[#5f6fda] ml-2 cursor-pointer"> Experience</button>
                            </a>
                        <button
                            onClick={() => setShowEducation(!showEducation)}
                            id="education-btn" className="border rounded border-gray-700 px-3 py-1 bg-[#5f6fda] ml-2 cursor-pointer "> Education</button>
                        <div
                            id="education-section"
                            className={`text-[#3f52c7] ml-60 ${showEducation ? '' : 'hidden'}`}
                        >
                            <p className="text-[#5f6fda] text-lg font-bold mt-2 mr-5">My education</p>
                            <h1>University of Cape Coast, Ghana</h1>
                            <p>Bachelor’s Degree in Information Technology | 2017 – 2021</p>
                        </div>

                        {/* <button
          onClick={() => setShowMenu(!showMenu)}
          className="bg-purple-600 text-white px-4 py-2 rounded"
        >
          Toggle Menu
        </button> */}
                    </div>
                </div>
            </div>

        </section>

    )
}

export default About