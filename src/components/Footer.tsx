function Footer (){
    return(
        <>
        <section id="contact" className="">
             {/* <!-- Footer --> */}
    <footer className="bg-gray-800 text-white text-sm py-6 px-4 text-center rounded-t-lg">
      <div className="space-y-2 flex flex-col md:flex-row justify-around">
        <p className="mt-15">&copy; 2025 K.Christiana. All rights reserved.</p>
        <div className="flex flex-col">
            <h1 className="text-lg font-bold text-center p-2 md:mt-0 mt-5">Contact</h1>
                <a href="mailto:kobiahchristiana@gmail.com" className="mb-1 text-blue-500 text-sm md:text-base leading-relaxed" >kobiahchristiana@gmail.com </a>
                <a href="tel:+233208242531" className="text-blue-500 md:text-base text-xs leading-relaxed" >Call us: +233208242532</a>
        </div>
        <div className="space-x-4 md:mt-15 mt-5">
          <a href="#" className="hover:underline">Home</a>
          <a href="#about" className="hover:underline">About</a>
          <a href="#portfolio" className="hover:underline">Portfolio</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </div>
      </div>
    </footer>
        </section>
        </>
    )
}

export default Footer