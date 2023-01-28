import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const Submit = async () => {
        console.warn(name, email, message)

        let result = await fetch("http://localhost:5000/user", {
            method: "Post",
            body: JSON.stringify({ name, email, message }),
            headers: { 'Content-Type': 'application/json' }
        })
        result = await result.json();
        console.warn(result)

        
    }

    return (
        <div id='contact'>
            <div className="text-center mb-6">
                <h2 className="text-3xl font-semibold text-gray-800">Get in touch</h2>
                <p className="text-xl text-gray-600">
                    Contact us on social media or send us an email
                </p>
            </div>

            <div className="flex flex-wrap items-center justify-center">
                <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-800 mx-3"
                >
                    <FaFacebook className="h-6 w-6" />
                </a>
                <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-800 mx-3"
                >
                    <FaTwitter className="h-6 w-6" />
                </a>
                <a
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-800 mx-3"
                >
                    <FaInstagram className="h-6 w-6" />
                </a>
            </div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <form className="max-w-lg mx-auto mt-10 p-10 bg-white rounded-lg shadow-xl">
                    <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>
                    <div className="mb-4">
                        <label htmlFor="name" className="block font-bold mb-2 text-gray-700">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            onChange={(e) => setName(e.target.value)} value={name}
                            className="w-full py-2 px-3 text-gray-700 bg-gray-200 rounded-md focus:outline-none focus:shadow-outline-blue"
                            placeholder="John Smith"
                            required
                            
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block font-bold mb-2 text-gray-700">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                             onChange={(e) => setEmail(e.target.value)} value={email}
                            className="w-full py-2 px-3 text-gray-700 bg-gray-200 rounded-md focus:outline-none focus:shadow-outline-blue"
                            placeholder="john@example.com"
                            required
                            
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block font-bold mb-2 text-gray-700">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            onChange={(e) => setMessage(e.target.value)} value={message}
                            className="w-full py-2 px-3 text-gray-700 bg-gray-200 rounded-md focus:outline-none focus:shadow-outline-blue"
                            placeholder="Enter your message here..."
                            required
                            
                        />
                    </div>

                    <div className="mb-6 text-center">
                        <button onClick={Submit} type="submit" className="px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
                            Submit
                        </button>
                    </div>
                </form>
            </motion.div>
        </div>

    )
}

export default Contact;


