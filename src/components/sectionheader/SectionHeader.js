import { useRef } from "react";
import { useInView } from "framer-motion";
import "./SectionHeader.css";

const SectionHeader = (props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="section-heading" ref={ref}>
      <div
        className="linebreak"
        style={{
          transform: isInView ? "none" : "translateX(-50px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.5s ease-in 0.75s",
        }}
      ></div>
      <img
        src={props.src}
        alt={props.alt}
        style={{
          transform: isInView ? "none" : "translateY(-50px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.75s ease-in",
        }}
      />
      <div
        className="linebreak"
        style={{
          transform: isInView ? "none" : "translateX(50px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.5s ease-in 0.755s",
        }}
      ></div>
    </div>
  );
};

export default SectionHeader;
