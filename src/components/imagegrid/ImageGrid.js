import "./ImageGrid.css";
import SingleImage from "./SingleImage";

import h1 from "../../img/h1.jpg";
import h2 from "../../img/h2.jpg";
import v2 from "../../img/v1.jpg";
import v1 from "../../img/v2.jpg";

const ImageGrid = () => {
  return (
    <div className="dreamcatcher">
      <div className="box">
        <div className="dream">
          <SingleImage src={h1} alt="img" />
          <SingleImage src={v1} alt="portfolio" />
        </div>
        <div className="dream">
          <SingleImage src={v2} alt="portfolio" />
          <SingleImage src={h2} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default ImageGrid;
