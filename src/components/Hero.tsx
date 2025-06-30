
import profile2 from "../assets/img/myprofile2.jpg"
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa"; 

function Hero() {
  return (
    <section id="home">
      <div className="flex flex-col md:flex-row justify-between items-center text-white">
        <div className="ml-5">
          <h1 className="md:text-4xl font-bold sm:text-2xl text-3xl">Christiana Kobiah</h1>
          <h3 className="text-xl font-medium">Frontend Developer</h3>
          <p className="md:text-sm md:mt-3.5 mr-5 mt-7 sm:text-base ">
            Results-driven Frontend Developer skilled in HTML, CSS, JavaScript, and React and Tailwind,
            <br /> with a passion for crafting responsive and accessible web applications. Adept at collaborating
            <br /> with teams to deliver high-quality, user-centered solutions.
          </p>

          <div className="mt-6 flex flex-row items-center">
            <a
              href="/Christiana_Kobiah_Resume.pdf"
              download
              className="border rounded-full w-30 md:w-40 text-center px-1 py-2 pt-1.5 shadow-[0_0_20px] text-gray-500 bg-white hover:bg-[#5f6fda] hover:text-white mr-3"
            >
              Download CV
            </a>
           <a href="https://www.linkedin.com/in/christiana-kobiah"> 
        <div className="flex flex-col items-center mr-4">
            <FaLinkedin className="text-3xl text-white hover:text-purple-600" />
      </div>
      </a>
      <a href="https://github.com/Christianakobiah">
        <div className="flex flex-col items-center mr-4">
        <FaGithub className="text-3xl text-white hover:text-purple-600" />
      </div>
      </a>
            <a href=""> <div className="flex flex-col items-center">
        <FaTwitter className="text-3xl text-white hover:text-purple-600" />
      </div>
      </a>
          </div>
        </div>

        <div className="border-2 rounded-full overflow-hidden shadow-[0_0_20px] mt-16 mr-15">
          <img src={profile2} alt="Christiana" className=" sm:w-60 sm:h-60 w-72 h-72 object-cover hidden md:block" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
