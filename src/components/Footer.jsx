import { Typography } from "@material-tailwind/react";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { Link } from "react-scroll";

const Footer = () => {
  const motionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { ease: "easeOut", duration: 0.6, staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  return (
    <footer className="relative overflow-hidden bg-gradient-to-r from-zinc-800 via-zinc-800 to-zinc-900 font-brand">
      <motion.div
        className="container px-6 py-12 mx-auto relative z-10"
        initial="hidden"
        animate={controls}
        variants={motionVariants}
        ref={ref}
      >
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* About CryptoX */}
          <motion.div variants={itemVariants}>
            <h2 className="text-2xl font-bold text-white mb-4">About CryptoX</h2>
            <p className="text-gray-300">
              CryptoX is a real-time cryptocurrency tracking dashboard built to help you explore market trends with clean charts, updated prices, and powerful insights — all in one place.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.section variants={itemVariants}>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="header"
                  smooth={true}
                  duration={500}
                  className="text-gray-300 hover:text-accent cursor-pointer"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="market"
                  smooth={true}
                  duration={500}
                  className="text-gray-300 hover:text-accent cursor-pointer"
                >
                  Tracker
                </Link>
              </li>
            </ul>
          </motion.section>

          {/* Resources */}
          <motion.section variants={itemVariants}>
            <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.coingecko.com/en/api"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-accent transition"
                >
                  CoinGecko API
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/rakshithdn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-accent transition"
                >
                  GitHub Repo
                </a>
              </li>
            </ul>
          </motion.section>
        </div>

        <hr className="my-8 border-zinc-700/50" />

        <motion.div className="text-center" variants={itemVariants}>
          <Typography variant="small" className="text-gray-400">
            © 2025 <span className="text-accent font-bold">CryptoX</span>. Built using React + Tailwind by Rakshith D N 🚀
          </Typography>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
