import React from 'react';
import img from '../images/Businessman_Isometric.svg'; 
import img2 from '../images/app.svg';
import img3 from '../images/Data_Arranging_Flatline.svg';
import img4 from '../images/consultation.svg';

const Services = () => {

    return (
        <div id="services" className="bg-gray-100 py-12" >
            <section data-aos="zoom-in-down">
                    <div className="my-4 py-4">
                        <h2 className="my-2 text-center text-3xl text-blue-500 uppercase font-bold">services</h2>
                        
                        <div className='flex justify-center'>
                            <div className='w-24 border-b-4 border-blue-500'></div>
                        </div>
                        <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-blue-500">We are deeply committed to the growth and success of our clients.</h2>
                    </div>

                    <div className="px-12" data-aos="fade-down" data-aos-delay="600">
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                            
                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img} />
                                    <h2 className="font-semibold my-4 text-2xl text-center">Business Translation</h2>
                                    <p className="text-md font-medium">
                                    We understand that your business is your livelihood. Our business translation services are designed to help you break into new markets, providing translations for everything from contracts and marketing materials to technical manuals. We ensure your business message is accurately conveyed, fostering relationships with your international clients.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img2} />
                                    <h2 className="font-semibold my-4 text-2xl text-center">Document Translation</h2>
                                    <p className="text-md font-medium">
                                    From personal documents like birth certificates and academic transcripts to legal papers and medical reports, our document translation services ensure that your paperwork is accurately translated and ready for use, whatever your purpose may be.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                    <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img3} />
                                    <h2 className="font-semibold my-4 text-2xl text-center ">Website Localization</h2>
                                    <p className="text-md font-medium">
                                    We live in a digital age, and your online presence matters. Our website localization services go beyond simple translation - we also adapt your digital content to resonate with local cultures, ensuring that your brand's message remains consistent across different regions.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img4} />
                                    <h2 className="font-semibold my-4 text-2xl text-center ">Interpretation Services</h2>
                                    <p className="text-md font-medium">
                                    Real-time communication is crucial in several scenarios. Whether for conferences, meetings, or legal proceedings, our expert interpreters deliver simultaneous or consecutive interpretation services that ensure seamless communication between all parties involved.
                                    </p>
                                </div>
                            </div>                    
                        </div>
                    </div>
            </section>

        
        </div>
    )
}

export default Services;