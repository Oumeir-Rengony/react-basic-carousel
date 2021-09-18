import { useState } from "react";
import "./App.css";

const App = () => {
  const IMAGE_DATA = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"];

  // index of active image
  const [activeIndex, setActiveIndex] = useState(0);

  const changeImage = (event) => {
    let index = 0;

    //prev or next
    const direction = event.target.getAttribute("data-direction");

    //get index of image to display
    if (direction === "forward") index = (activeIndex + 1) % IMAGE_DATA.length;
    else if (direction === "backward")
      index = (activeIndex - 1 + IMAGE_DATA.length) % IMAGE_DATA.length;
    //if direction is null, dot was clicked directly
    else index = parseInt(event.target.getAttribute("data-index"));

    setActiveIndex(index);
  };

  return (
    <div className="slider">
      {IMAGE_DATA.map((image, index) => (
        <div
          key={index}
          className={`slide ${index === activeIndex ? "active" : ""}`}
          data-index={index}
        >
          <img src={`./images/${image}`} alt="carousel" />
        </div>
      ))}

      <div className="navigation">
        <i
          className="fas fa-chevron-left prev-btn"
          data-direction="backward"
          onClick={(e) => changeImage(e)}
        />
        <i
          className="fas fa-chevron-right next-btn"
          data-direction="forward"
          onClick={(e) => changeImage(e)}
        />
      </div>

      <div className="navigation-visibility">
        {IMAGE_DATA.map((_image, index) => (
          <div
            key={index}
            className={`slide-icon ${index === activeIndex ? "active" : ""}`}
            data-index={index}
            onClick={(e) => changeImage(e)}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
