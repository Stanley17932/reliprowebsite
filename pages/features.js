import React from "react";
import Header from "../components/Header"; // Import Header
import Footer from "../components/Footer"; // Import Footer
import Link from "next/link"; // Import Link for navigation

const Features = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      {/* Header component */}
      <Header />

      {/* Main content section with background image */}
      <div
        className="relative flex-grow py-16 px-4 bg-cover bg-center"
        style={{
          backgroundImage: "url('/assets/logos/worker.jpeg')", // Path to your background image
        }}
      >
        {/* Overlay for opacity */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Content layered above background */}
        <div className="relative z-10">
          {/* Introduction to Features */}
          <section className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              Our Key Features
            </h2>
            <p className="text-lg text-gray-200">
              ReliPro provides a comprehensive, AI-driven Reliability-Centered
              Maintenance platform that empowers manufacturers to monitor,
              predict, and optimize their equipment performance. Below are the
              key features that make ReliPro stand out.
            </p>
          </section>

          {/* Feature List */}
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
            {/* Feature 1 */}
            <div className="text-center p-6 bg-blue-200 rounded-lg shadow-md">
              <div className="text-4xl text-blue-500 mb-4">
                <i className="fas fa-cogs"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Real-Time Monitoring
              </h3>
              <p className="text-gray-700">
                Monitor your equipment in real-time, receive alerts for faults,
                and ensure consistent operations across your plant.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center p-6 bg-blue-200 rounded-lg shadow-md">
              <div className="text-4xl text-blue-500 mb-4">
                <i className="fas fa-robot"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Predictive Maintenance
              </h3>
              <p className="text-gray-700">
                Use AI-powered analytics to predict failures before they occur,
                reducing unplanned downtime and maintenance costs.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center p-6 bg-blue-200 rounded-lg shadow-md">
              <div className="text-4xl text-blue-500 mb-4">
                <i className="fas fa-users"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Mobile Technician App
              </h3>
              <p className="text-gray-700">
                Enable your technicians to access machine data, manage
                maintenance tickets, and track repairs on-the-go with our mobile
                app.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="text-center p-6 bg-blue-200 rounded-lg shadow-md">
              <div className="text-4xl text-blue-500 mb-4">
                <i className="fas fa-chart-line"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">Advanced Analytics</h3>
              <p className="text-gray-700">
                Dive deep into performance metrics and trends to make
                data-driven decisions that improve operational efficiency.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="text-center p-6 bg-blue-200 rounded-lg shadow-md">
              <div className="text-4xl text-blue-500 mb-4">
                <i className="fas fa-cloud"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">Cloud Integration</h3>
              <p className="text-gray-700">
                Seamlessly integrate with cloud-based systems to centralize data
                and improve collaboration between teams.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="text-center p-6 bg-blue-200 rounded-lg shadow-md">
              <div className="text-4xl text-blue-500 mb-4">
                <i className="fas fa-lock"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure Data</h3>
              <p className="text-gray-700">
                Ensure that your machine data is protected with top-tier
                security protocols and encryption technologies.
              </p>
            </div>
          </section>

          {/* Feature Highlights */}
          <section className="text-center bg-blue-600 text-white py-16 px-4 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold mb-4">Why Choose ReliPro?</h2>
            <p className="text-lg mb-6">
              ReliPro is not just another maintenance platform. It's an
              AI-driven, scalable solution designed to optimize your operations
              and prevent costly downtime. With features like real-time
              monitoring, predictive maintenance, and mobile technician support,
              ReliPro is the future of maintenance management.
            </p>
            <button className="bg-blue-700 hover:bg-blue-800 text-white py-2 px-6 rounded-lg">
              <Link href="/contact"> Get Started Today </Link>
            </button>
          </section>
        </div>
      </div>

      {/* Footer component */}
      <Footer />
    </div>
  );
};

export default Features;
