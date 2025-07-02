
import forpot from "../assets/img/forpot.png";
import advertise from "../assets/img/advertise.png";
import myport from "../assets/img/myport.png"
import cloth from "../assets/img/cloth-1.png";
import evhive from "../assets/img/evhive.png";
import bookie from "../assets/img/bookie.png";


function MyPortfolio() {
    return (
        <>
           <section id="portfolio" className="bg-gray-200 pt-10 pb-16">
  <p className="text-center text-[#5f6fda] text-4xl font-bold md:text-4xl  mb-12">
    This Is My Portfolio
  </p>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-24">
    <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl overflow-hidden h-[400px] flex flex-col">
      <img src={cloth} className="w-full object-contain" />
      <div className="flex flex-col justify-between flex-grow p-5">
        <h2 className="text-xl font-semibold text-[#283DBA] mb-2">Fashion Landing Page</h2>
        <p className="text-gray-600 text-sm mb-4">
          A beautiful landing page for a fashion shop built with love.
        </p>
        <a href="https://landingpage-assignment-eosin.vercel.app/" target="_blank" rel="noreferrer">
          <button className="w-full bg-[#5f6fda] text-white py-2 rounded hover:bg-[#4c5ace] transition mb-0">
            View Project
          </button>
        </a>
      </div>
    </div>

   
    <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl overflow-hidden h-[400px] flex flex-col">
      <img src={forpot} alt="Form Project" className="w-full h-60 object-cover" />
      <div className="flex flex-col justify-between flex-grow p-5">
        <h2 className="text-xl font-semibold text-[#283DBA] mb-2">Form Page</h2>
        <p className="text-gray-600 text-sm mb-4">
          A clean and responsive form interface made with tailwindcss.
        </p>
        <a href="https://team-strawberry-bel8.vercel.app/" target="_blank" rel="noreferrer">
          <button className="w-full bg-[#5f6fda] text-white py-2 rounded hover:bg-[#4c5ace] transition">
            View Project
          </button>
        </a>
      </div>
    </div>

      <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl overflow-hidden h-[400px] flex flex-col">
      <img src={evhive} alt="Form Project" className="w-full h-60 object-cover" />
      <div className="flex flex-col justify-between flex-grow p-5">
        <h2 className="text-xl font-semibold text-[#283DBA] mb-2">Event Hive Page</h2>
        <p className="text-gray-600 text-sm mb-4">
           Event listing and ticketing interface where users can discover and manage events
        </p>
        <a href="https://eventhivec.netlify.app/" target="_blank" rel="noreferrer">
          <button className="w-full bg-[#5f6fda] text-white py-2 rounded hover:bg-[#4c5ace] transition">
            View Project
          </button>
        </a>
      </div>
    </div>
    
     <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl overflow-hidden h-[400px] flex flex-col">
      <img src={advertise} alt="Form Project" className="w-full h-60 object-cover" />
      <div className="flex flex-col justify-between flex-grow p-5">
        <h2 className="text-xl font-semibold text-[#283DBA] mb-2">Buyversity Advert Platform</h2>
        <p className="text-gray-600 text-sm mb-4">
          An interactive platform that allows students to buy what they need and advertise what they sell.
        </p>
        <a href="https://buyversityc.netlify.app/" target="_blank" rel="noreferrer">
          <button className="w-full bg-[#5f6fda] text-white py-2 rounded hover:bg-[#4c5ace] transition">
           View Project
          </button>
        </a>
      </div>
    </div>

     <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl overflow-hidden h-[400px] flex flex-col">
  <img src={bookie} alt="Form Project" className="w-full h-60 object-cover" />

  <div className="flex flex-col justify-between flex-grow p-5">
    <div>
      <h2 className="text-xl font-semibold text-[#283DBA] mb-2">A Bookie Library App</h2>
      <p className="text-gray-600 text-sm">
        A simple online library app for organizing and browsing books.
      </p>
    </div>

    <a href="https://bookieappc.netlify.app/" target="_blank" rel="noreferrer">
      <button className="w-full bg-[#5f6fda] mt-4 text-white py-2 rounded hover:bg-[#4c5ace] transition">
        View Project
      </button>
    </a>
  </div>
</div>


     <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl overflow-hidden h-[400px] flex flex-col">
      <img src={myport} alt="Form Project" className="w-full h-60 object-cover" />
      <div className="flex flex-col justify-between flex-grow p-5">
        <h2 className="text-xl font-semibold text-[#283DBA] mb-2">My Portfolio</h2>
        <p className="text-gray-600 text-sm mb-4">
         My personal portfolio showcasing my skills, projects, work experience and journey as a frontend developer
        </p>
        <a href="https://my-portfolio-d578.vercel.app/" target="_blank" rel="noreferrer">
          <button className="w-full bg-[#5f6fda] text-white py-2 rounded hover:bg-[#4c5ace] transition">
            View Project
          </button>
        </a>
      </div>
    </div>
  </div>

   <hr className="border-gray-300 mx-25 mt-14"/>
</section>

        </>
    )
}

export default MyPortfolio
