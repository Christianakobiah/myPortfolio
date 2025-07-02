// import profile3 from "../assets/img/myprofile3.jpg";

function Message (){
    return(
        <>
       <section 
    //    style={{ backgroundImage: `url(${profile3})` }}
       className=" bg-contain bg-no-repeat bg-center text-center text-white h-auto ">
            {/* <div className="bg-[rgba(60,80,198,0.5)] pt-20" > */}
            <div className="pt-10 bg-gray-200">
                <p className="text-4xl text-black  mt-5 leading-relaxed">I am <span className="text-[#B11AC6] z-20 ">available for work</span> from home and in person</p>
                <p className="text-lg mt-5 text-black">Connect with me let build beauitiful things that brings meaning to life together.</p>

                <a href="mailto:kobiahchristiana@gmail.com">
                   <button className= " mt-5 border rounded-full px-3 border-[#283DBA] text-white h-10 w-30 bg-[#283DBA] font-medium mb-15 cursor-pointer" >Hire Me</button>
                </a>
            </div>
            

        </section>
        </>
    )
}

export default Message