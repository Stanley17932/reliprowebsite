import React from "react";
import Header from "../components/Header"; // Import Header
import Footer from "../components/Footer"; // Import Footer

const Contact = () => {
  return (
    <div className="bg-black min-h-screen flex flex-col text-white">
      {/* Header component */}
      <Header />

      {/* Main content section */}
      <div className="flex-grow py-16 px-4">
        {/* Contact Form Section */}
        <section className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Contact Us</h2>
          <p className="text-lg mb-8">
            Have any questions or need support? Reach out to us by filling in
            the form below, or send us an email directly at{" "}
            <a
              href="mailto:relipro22@gmail.com"
              className="text-green-600 hover:text-green-900"
            >
              stanley.otieno@relipro.pro
            </a>
            .
          </p>

          {/* Contact Form */}
          <form
            action="mailto:stanley.otieno@relipro.pro"
            method="POST"
            encType="text/plain"
            className="bg-gray-800 p-8 rounded-lg shadow-lg"
          >
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-lg font-semibold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none"
                placeholder="Your Name"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-lg font-semibold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none"
                placeholder="Your Email"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-lg font-semibold mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows="5"
                className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none"
                placeholder="Your Message"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-green-800 text-white font-semibold rounded-lg hover:bg-green-900"
            >
              Send Message
            </button>
          </form>
        </section>
      </div>

      {/* Footer component */}
      <Footer />
    </div>
  );
};

export default Contact;
