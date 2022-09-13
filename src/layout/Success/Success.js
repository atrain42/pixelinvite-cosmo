import { useRef } from "react";
import { Link } from "react-router-dom";
import { useInView } from "framer-motion";
import "./Success.css";

import heart from "../../img/heart.svg";

const Success = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section className="success" ref={ref}>
      <div className="success-text">
        <h1
          style={{
            transform: isInView ? "none" : "translateY(20px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.75s linear",
          }}
        >
          Thank you!
        </h1>
        <p
          style={{
            transform: isInView ? "none" : "translateY(20px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.75s linear 0.15s",
          }}
        >
          We hope to see you at the shower
        </p>
        <img
          src={heart}
          alt="heart"
          style={{
            transform: isInView ? "none" : "translateY(20px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.75s linear 1.25s",
          }}
        />
        <Link
          to="/"
          style={{
            transform: isInView ? "none" : "translateY(20px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.75s linear 1.25s",
          }}
        >
          BACK HOME
        </Link>
      </div>
    </section>
  );
};

export default Success;
