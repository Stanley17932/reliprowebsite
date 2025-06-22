import React from "react";
import Header from "../components/Header"; // Import Header
import Footer from "../components/Footer"; // Import Footer

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header component */}
      <Header />

      {/* Main content section */}
      <div className="flex-grow py-8 px-4 relative">
        {/* Background image with opacity */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-opacity-80"
          style={{ backgroundImage: "url(/assets/logos/plant3.jpg)" }}
        ></div>

        {/* Content */}
        <section className="relative text-center mb-16 z-10">
          {/* Wrapping heading and paragraph inside a box */}
          <div className="bg-white p-6 border-2 border-gray-300 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-black mb-4">
              About ReliPro
            </h2>
            <p className="text-lg text-black">
              ReliPro was founded in March 2025 with the vision to transform
              maintenance management in manufacturing industries. Our mission is
              to enhance operational reliability, reduce downtime, and provide
              affordable predictive maintenance solutions. By leveraging AI,
              IoT, and cloud technologies, we offer a scalable platform that
              empowers manufacturers to proactively manage their equipment and
              improve efficiency.
            </p>
          </div>
        </section>

        <section className="relative bg-burgundy-light bg-opacity-90 py-16 px-4 text-center z-0">
          <h2 className="text-3xl font-bold text-white mb-4">
            Our Vision and Platform
          </h2>
          <p className="text-lg text-white">
            At ReliPro, we believe that the future of maintenance is predictive
            and data-driven. Our platform offers real-time monitoring,
            AI-powered failure prediction, and automated technician dispatching
            to ensure that manufacturing plants can run smoothly without costly
            downtime. By connecting machines, technicians, and manufacturers, we
            aim to make maintenance smarter, faster, and more efficient.
          </p>
        </section>
      </div>

      {/* Footer component */}
      <Footer />
    </div>
  );
};

export default About;
