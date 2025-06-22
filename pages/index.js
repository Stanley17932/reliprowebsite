import Slider from "../components/Slider"; // Import Slider
import Header from "../components/Header"; // Import Header
import Footer from "../components/Footer"; // Import Footer
import Services from "../components/Services"; // Import Services
import Testimonials from "../components/Testimonials"; // Import Testimonials
import Link from "next/link"; // Import Link for navigation

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black bg-opacity-80">
      {/* Header component */}
      <Header />
      {/* Main content section */}
      <div className="flex flex-col items-center justify-center h-screen bg-black bg-opacity-100">
        <Slider />
        <div className="absolute z-10 flex flex-col items-center space-y-5">
          <h2 className="text-4xl font-bold text-white text-center">
            Welcome to ReliPro
          </h2>

          <p className="text-white text-lg text-center">
            Revolutionizing Maintenance with Predictive Insights
          </p>
          <button className="bg-green-600 text-white p-3 rounded-lg hover:bg-green-800">
            <Link href="/contact">Get Started</Link>
          </button>
        </div>
      </div>
      {/* Services Section */}
      <Services />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Footer component */}
      <Footer />
    </div>
  );
}
