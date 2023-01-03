import '../styles/globals.css';
import { motion } from 'framer-motion';

export default function App({ Component, pageProps, router }) {
  return (
    <motion.div
      initial="pageInitial"
      animate="pageAnimate"
      variants={{
        pageInitial: { opacity: 0 },
        pageAnimate: { opacity: 1 },
      }}
      key={router.route}
    >
      <Component {...pageProps} />{' '}
    </motion.div>
  );
}
