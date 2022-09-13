import { useRef } from "react";
import { useInView, motion } from "framer-motion";
import { Link } from "react-router-dom";

import "./Home.css";
import couple from "../../img/couple.jpg";
import { SectionHeader, ImageGrid } from "../../components";
import heart from "../../img/heart-beat.png";

const Home = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const qref = useRef(null);
  const qInView = useInView(qref, { once: true });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="home">
        <header className="header">
          <h1>Beth & Roger</h1>
          <h1>are having a baby</h1>
        </header>
        <SectionHeader src={heart} alt="heart" />
        <section className="about" ref={ref}>
          <img src={couple} alt="couple" />

          <div
            className="about-text"
            style={{
              opacity: isInView ? 1 : 0,
              transition: "all 1s ease-in",
            }}
          >
            <h1>Our story</h1>
            <p>
              Hi everyone! We ask you to please join us, as we begin to prepare
              for the birth of our baby boy. Our beautfiul boy is healthy, and
              everything is going great. At our last doctors appointment he had
              a heartbeat of 110 BPM and is now the size of an avocado! We are
              looking forward to seeing family and friends as we prepare for the
              birth of our boy. Please RSVP on the site and visit the registry;
              thank you from the bottom of our hearts.
            </p>
            <h3 id="note">
              Love,<br></br>Allie and Tom
            </h3>
          </div>
        </section>
        <section className="message" ref={qref}>
          <p
            style={{
              opacity: qInView ? 1 : 0,
              transition: "all 1s ease-in",
            }}
          >
            “Having a baby is like falling in love again, both with your husband
            and your child.”
          </p>
          <ImageGrid />
          <Link to="/registry">VIEW REGISTRY</Link>
        </section>
      </div>
    </motion.div>
  );
};

export default Home;
