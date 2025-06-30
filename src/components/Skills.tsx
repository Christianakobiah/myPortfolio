import { GrHtml5 } from "react-icons/gr";
import { SiCss3 } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";


function Skills (){
    return(
        <>
         <section id="skills" className=" border border-gray-200 bg-gray-200">
             <h1 className="text-5xl capitalize text-center mt-5 text-[#283DBA]">my skills</h1>
            <div className="flex flex-row items-center mb-5">
                
    <div className="grid grid-cols-3 md:gap-25 gap-19 max-w-lg mx-auto mt-10 text-center">
      <div className=" items-center">
        <GrHtml5 className="md:text-8xl text-7xl text-orange-600 hover:text-blue-800" />
        <span className="mt-2 text-sm">HTML5</span>
      </div>

      <div className="flex flex-col items-center">
        <SiCss3 className="md:text-8xl text-7xl text-blue-400 hover:text-blue-600" />
        <span className="mt-2 text-sm">CSS</span>
      </div>

      <div className="flex flex-col items-center">
       <IoLogoJavascript className="md:text-8xl text-7xl text-pink-500 hover:text-pink-700" />
        <span className="mt-2 text-sm">Javascript</span>
      </div>

      <div className="flex flex-col items-center">
        <RiTailwindCssFill className="md:text-8xl text-7xl text-blue-400 hover:text-black" />
        <span className="mt-2 text-sm">Tailwindcss</span>
      </div>

      <div className="flex flex-col items-center">
       <FaReact className="md:text-8xl text-7xl text-blue-700 hover:text-blue-900" />
        <span className="mt-2 text-sm">React</span>
      </div>

      <div className="flex flex-col items-center">
      <SiTypescript className="md:text-8xl text-7xl text-blue-700 hover:text-blue-900" />
        <span className="mt-2 text-sm">Typescript</span>
      </div>
    </div>   
        </div>
         <hr className="border border-gray-400 mx-3 mt-10"/>

       </section>
        </>
    )
}

export default Skills