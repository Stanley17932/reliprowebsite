import { motion } from "framer-motion";
import "../styles/globals.css"; // Import global styles
import { Analytics } from "@vercel/analytics/react"; // Import Vercel Analytics

function MyApp({ Component, pageProps }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Component {...pageProps} />
      <Analytics />
    </motion.div>
  );
}

export default MyApp;
