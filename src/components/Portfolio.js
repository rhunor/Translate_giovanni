import React from 'react';
//import { Link } from 'react-router-dom';

const Portfolio = () => {
    return (
        <>
            <div className="my-4 py-4" id='portfolio'>
                <h2 className="my-2 text-center text-3xl text-blue-500 uppercase font-bold">Products</h2>
                <div className='flex justify-center'>
                    <div className='w-24 border-b-4 border-blue-500 mb-8'></div>
                </div>

                <div className="px-4" data-aos="fade-down" data-aos-delay="600">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">                            
                    <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
      <div className="m-2 text-justify text-sm">
        <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4">
          Global Tech Startup Expansion
        </h4>
        <p className="text-md font-medium leading-5">
          We partnered with a leading tech startup to translate and localize their entire website and user interface from English to Mandarin, Spanish, and French. This extensive project helped the company significantly expand its user base into new international markets.
        </p>
        <div className="flex justify-center my-4">
          {/* <Link
            to="/get-demo"
            className="text-white bg-blue-500 hover:bg-blue-300 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-xl"
          >
            Schedule Demo
            <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
            </svg>
          </Link> */}
        </div>
      </div>
    </div>

    <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
  <div className="m-2 text-justify text-sm">
    <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4">
      Legal Document Translation for a Multinational Corporation
    </h4>
    <p className="text-md font-medium leading-5">
      Our team expertly translated a collection of complex legal documents from Japanese to English for a Fortune 500 company. With our meticulous attention to detail, we ensured precise legal terminology and adherence to international law.
    </p>
    <div className="flex justify-center my-4">
      {/* <Link
        to="/get-demo"
        className="text-white bg-blue-500 hover:bg-blue-300 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-xl"
      >
        Schedule Demo
        <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
        </svg>
      </Link> */}
    </div>
  </div>
</div>

<div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
  <div className="m-2 text-justify text-sm">
    <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4">
      Medical Research Translation
    </h4>
    <p className="text-md font-medium leading-5">
      In collaboration with a prestigious research institute, we translated crucial medical research papers from German to English. Our work helped the client disseminate their findings to a broader scientific community, furthering the understanding and treatment of a rare disease.
    </p>
    <div className="flex justify-center my-4">
      {/* <Link
        to="/get-demo"
        className="text-white bg-blue-500 hover:bg-blue-300 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-xl"
      >
        Schedule Demo
        <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
        </svg>
      </Link> */}
    </div>
  </div>
</div>

                        <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
  <div className="m-2 text-justify text-sm">
    <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4">
      Interpretation Services at an International Conference
    </h4>
    <p className="text-md font-medium leading-5">
      TransLang Solutions provided real-time interpretation for keynote speakers and attendees at a major international conference in Dubai. We facilitated communication in Arabic, English, Russian, and French, ensuring that language barriers did not hinder the exchange of ideas.
    </p>
  </div>
  <div className="flex justify-center my-4">
    {/* <Link
      to="/get-demo"
      className="text-white bg-blue-500 hover:bg-blue-300 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-xl"
    >
      Schedule Demo
      <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
      </svg>
    </Link> */}
  </div>
</div>
                  
                    </div>
                </div>
            </div>
        </>
    )
}

export default Portfolio;