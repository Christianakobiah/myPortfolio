
function Experience() {
  return (
    
    <section className=" bg-gray-200">
    <div id="experience" className="flex flex-col max-w-4xl items-center md:ml-55">
      <div
        id="experience-section"
        className="text-[#3f52c7] mt-10 w-full px-5 md:px-20">
        <p className="text-[#5f6fda] text-4xl font-bold text-center mb-10">
          My Experience
        </p>

        <div className="relative border-l-4 border-purple-400 ml-4 space-y-10">
          {/* Experience 1 */}
          <div className="relative pl-6">
            <span className="absolute -left-3 top-1 w-4 h-4 bg-purple-500 rounded-full"></span>
            <div className="bg-gray-200 border border-gray-300 rounded-lg shadow-xl p-4">
              <h2 className="text-lg font-semibold">Frontend Developer</h2>
              <p className="text-sm text-gray-700 mt-1">
                I create easy-to-use and visually appealing websites that help
                people have a better online experience. I focus on making sure
                every design works well, looks good, and clearly shares the
                message. One step at a time, I turn ideas into real, working
                websites.
              </p>
            </div>
          </div>

          {/* Experience 2 */}
          <div className="relative pl-6">
            <span className="absolute -left-3 top-1 w-4 h-4 bg-purple-500 rounded-full"></span>
            <div className="bg-gray-200 border border-gray-300 rounded-lg shadow-xl p-4">
              <h2 className="text-lg font-semibold">Android Trainer & Customer Support</h2>
              <p className="text-sm text-gray-700 mt-1">
                Google Android – Remote | September 2023 – Present
              </p>
              <p className="text-sm text-gray-700">Equip Android phone promoters with practical knowledge of Android’s built-in features and essential Google apps  so they can confidently demonstrate these benefits to customers and convert product knowledge into successful sales strategies.</p>
            </div>
          </div>

          {/* Experience 3 */}
          <div className="relative pl-6">
            <span className="absolute -left-3 top-1 w-4 h-4 bg-purple-500 rounded-full"></span>
            <div className="bg-gray-200 border border-gray-300 rounded-lg shadow-xl p-4">
              <h2 className="text-lg font-semibold">
                Social Media Marketer & Customer Service Representative
              </h2>
              <p className="text-sm text-gray-700 mt-1">
                Lamendy Clothing – Accra, Online | March 2022 – Present
              </p>
              <p className="text-sm text-gray-700">Manage and grow Lamendy Clothing’s online presence through strategic content creation, customer engagement, and digital campaigns. Provide excellent customer service by addressing inquiries, processing orders, and resolving issues promptly to ensure customer satisfaction and loyalty.</p>
            </div>
          </div>

          {/* Experience 4 */}
          <div className="relative pl-6">
            <span className="absolute -left-3 top-1 w-4 h-4 bg-purple-500 rounded-full"></span>
            <div className="bg-gray-200 border border-gray-300 rounded-lg shadow-xl p-4">
              <h2 className="text-lg font-semibold">IT Support & Customer Service</h2>
              <p className="text-sm text-gray-700 mt-1">
                Lincoln Community School, Accra | October 2021 – October 2022
              </p>
              <p className="text-sm text-gray-700 pb-10">Provided IT support to teachers, students, and staff for Google apps and digital tools.
Assisted in scheduling classes, generating reports, and troubleshooting technical issues.
Helped improve user experience by addressing technology-related concerns</p>
            </div>
          </div>
        </div>
      </div>
    </div>

     <hr className="border-gray-300 mx-25 mt-14 pb-10"/>
    </section>
  );
}

export default Experience;
