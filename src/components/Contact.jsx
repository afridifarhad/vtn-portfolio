import React from "react";

function Contact() {
  return (
    <div name="Contact" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16">
      <h1 className="text-3xl font-bold mb-8 ">Contact</h1>
      <span className="block mb-8">Please fill out the form below to contact me</span>
      
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Contact Form */}
        <div className="w-full md:w-1/2 bg-gray-100 p-8 rounded-xl shadow-lg">
          <h1 className="text-2xl font-semibold mb-6 text-center">Send Your Message</h1>
          <form className="flex flex-col gap-6">
            <div className="flex flex-col">
              <label className="text-gray-700 font-medium">Full Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="mt-2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-700 font-medium">Email Address</label>
              <input
                type="email"
                placeholder="Enter your email address"
                className="mt-2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-700 font-medium">Message</label>
              <textarea
                placeholder="Type your message here"
                className="mt-2 p-3 border rounded-lg h-32 resize-none focus:outline-none focus:ring-2 focus:ring-green-500"
              ></textarea>
            </div>
            <button className="w-full bg-green-700 text-white font-semibold rounded-lg p-3 hover:bg-green-800 transition duration-300">
              Send Message
            </button>
          </form>
        </div>

        {/* Map Section */}
        <div className="w-full md:w-1/2 rounded-xl overflow-hidden shadow-lg ">
          <iframe
            title="Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.812270727254!2d71.46681837538486!3d33.99735542062715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d917d13f1eb5d9%3A0xd8252f9da8007f31!2sBoard%20Bazar%20Peshawar!5e0!3m2!1sen!2s!4v1730185730806!5m2!1sen!2s"
            width="100%"
            height="560"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;
