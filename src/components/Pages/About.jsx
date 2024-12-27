import React from 'react';
import about from '../../assets/mycontact.png';

const About = () => {
    return (
        <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold mb-6 text-gray-500">About Me</h1>
            <div className="w-full max-w-4xl bg-white rounded-lg shadow-md p-6">
                <div className="flex flex-col md:flex-row items-center">
                    <img
                        src={about}
                        alt="Your Profile"
                        className="w-32 h-32 rounded-full mb-4 md:mb-0 md:mr-6"
                    />
                    <div>
                        <h1 className="text-3xl font-bold mb-2 text-center text-gray-500">About Me</h1>
                        <p className="text-gray-700 mb-4">
                            Hi, I'm Abadanaf, the owner of Myshop. I have a passion for Fullstack developing and have been in the industry for 5 years. My goal is to provide the best products and services to my customers.
                        </p>
                        <h2 className="text-2xl font-bold mb-2 text-center text-gray-500">My Vision</h2>
                        <p className="text-gray-700">
                            My vision is to create a shop where customers can find high-quality products that meet their needs and exceed their expectations. I believe in continuous improvement and always strive to enhance the shopping experience.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;