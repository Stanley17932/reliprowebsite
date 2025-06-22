import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa"; // Importing react-icons

const Footer = () => {
  return (
    <footer className="bg-black text-white p-6 opacity-90">
      <div className="flex justify-between items-center">
        <p>&copy; 2025 ReliPro. All rights reserved.</p>
        <div className="flex space-x-6">
          <a
            href="https://www.facebook.com/yourpage"
            className="text-white hover:text-teal-300"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://www.twitter.com/yourprofile"
            className="text-white hover:text-teal-300"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://www.linkedin.com/yourprofile"
            className="text-white hover:text-teal-300"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://www.instagram.com/yourprofile"
            className="text-white hover:text-teal-300"
          >
            <FaInstagram size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
