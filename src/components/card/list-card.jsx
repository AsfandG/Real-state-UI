import { Link } from "react-router-dom";
import "./list-card.scss";

const ListCard = ({ item }) => {
  return (
    <div className="list-card">
      <Link to={`/${item.id}`} className="image-container">
        <img src={item.img} alt="card" />
      </Link>
      <div className="text-container">
        <Link to={`/${item.id}`}>
          <h2 className="title">{item.title}</h2>
        </Link>
        <p className="address">
          <img src="pin.png" alt="adresspin" />
          <span>{item.address}</span>
        </p>
        <p className="price">$ {item.price}</p>
        <div className="bottom">
          <div className="features">
            <div className="feature">
              <img src="bed.png" alt="bedrooms" />
              <span>{item.bedroom} bedrooms</span>
            </div>
            <div className="feature">
              <img src="bath.png" alt="bathrooms" />
              <span>{item.bathroom} bathrooms</span>
            </div>
          </div>
          <div className="icons">
            <div className="icon">
              <img src="save.png" alt="save" />
            </div>
            <div className="icon">
              <img src="chat.png" alt="save" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListCard;
