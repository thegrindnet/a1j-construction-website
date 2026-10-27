import "./Area.css";
import { areaOfService } from "../../utils/constants.js";
import checkmark from "../../assets/images/checkmark.png";

function Area() {
  return (
    <section className="areaOfService">
      <eyebrow className="eyebrow">Area of Service</eyebrow>
      <h2>We Serve the Following Areas:</h2>
      <div className="areaOfService__table">
        {areaOfService.map((city) => (
          <div className="cityArea">
            <img
              className="areaOfService__checkmark"
              src={checkmark}
              alt="checkmark"
            />
            <p>{city}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Area;
