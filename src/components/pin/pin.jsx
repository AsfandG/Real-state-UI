import { Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom";
import "./pin.scss";

const Pin = ({ item }) => {
  return (
    <div>
      <Marker position={[item.latitude, item.longitude]}>
        <Popup>
          <div className="popup-container">
            <img src={item.img} alt="hotel pin" />
            <div className="text-container">
              <Link to={`/${item.id}`}>{item.title}</Link>
              <span className="bed">{item.bedroom} bedroom</span>
              <b>$ {item.price}</b>
            </div>
          </div>
        </Popup>
      </Marker>
    </div>
  );
};

export default Pin;
