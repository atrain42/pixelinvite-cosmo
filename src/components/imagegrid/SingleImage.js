import { useRef } from "react";
import { useInView } from "framer-motion";

const SingleImage = ({ src, alt }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div ref={ref}>
      <img
        src={src}
        alt={alt}
        style={{
          opacity: isInView ? 1 : 0,
          transition: "all 0.5s ease-in 0.2s",
        }}
      />
    </div>
  );
};

export default SingleImage;
