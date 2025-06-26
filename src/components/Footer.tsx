function Footer (){
    return(
        <>
        <section>
             {/* <!-- Footer --> */}
    <footer className="bg-gray-800 text-white text-sm py-6 px-4 text-center rounded-t-lg">
      <div className="space-y-2 flex flex-row justify-around">
        <p>&copy; 2025 K.Christiana. All rights reserved.</p>
        <div className="space-x-4">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">About</a>
          <a href="#" className="hover:underline">Portfolio</a>
          <a href="#" className="hover:underline">Contact</a>
        </div>
      </div>
    </footer>
        </section>
        </>
    )
}

export default Footer