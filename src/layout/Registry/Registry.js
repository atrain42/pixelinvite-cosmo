import "./Registry.css";

import baby from "../../img/baby.png";
import { motion } from "framer-motion";
import registry from "../../img/registry.jpg";

const Registry = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <section className="registry">
        <div className="registry-text">
          <img src={baby} alt="baby" />
          <h1>Our Registry</h1>
          <p>We are registered at amazon.com</p>
        </div>
        <div className="registry-content">
          <img src={registry} alt="registry" />
          <p className="registry-quote">
            We thank you guys for supporting us in our journey. We are so
            excited for our baby to arrive, and can't wait to start setting up
            the room. Below is the registry if you would like to help us prepare
            for the baby's arrival.
          </p>
          <a href="https://www.amazon.com/baby-reg/homepage">VIEW REGISTRY</a>
        </div>
      </section>
    </motion.div>
  );
};

export default Registry;
