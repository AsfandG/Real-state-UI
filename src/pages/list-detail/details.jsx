import Slider from "../../components/slider/slider";
import { singlePostData, userData } from "../../lib/list_mock_data";
import Map from "../../components/map/map";
import "./details.scss";
import { useLoaderData } from "react-router-dom";
import DOMPurify from "dompurify";

const ListDetails = () => {
  const post = useLoaderData();
  return (
    <div className="detail-page">
      <div className="details">
        <div className="wrapper">
          <Slider images={post.images} />
          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{post.title}</h1>
                <div className="address">
                  <img src="pin.png" alt="location-pin" />
                  <span>{post.address}</span>
                </div>
                <div className="price">$ {post.price}</div>
              </div>
              <div className="user">
                <img src={post.user.avatar} alt="" />
                <span>{post.user.username}</span>
              </div>
            </div>
            <div
              className="bottom"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(post.postDetail.desc),
              }}
            ></div>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="wrapper">
          <p className="title">General</p>
          <div className="list-vertical">
            <div className="feature">
              <img src="utility.png" alt="" />
              <div className="feature-text">
                <span>Utilities</span>
                {post.postDetail.utilities === "owner" ? (
                  <p>Owner is responsible</p>
                ) : (
                  <p>Tenant is responsible</p>
                )}
              </div>
            </div>
            <div className="feature">
              <img src="pet.png" alt="" />
              <div className="feature-text">
                <span>Pet Policy</span>
                {post.postDetail.pets === "allowed" ? (
                  <p>Pets Allowed</p>
                ) : (
                  <p>Pets not Allowed</p>
                )}
              </div>
            </div>
            <div className="feature">
              <img src="fee.png" alt="" />
              <div className="feature-text">
                <span>Income Policy</span>
                <p>{post.postDetail.income}</p>
              </div>
            </div>
          </div>
          <p className="title">Sizes</p>
          <div className="sizes">
            <div className="size">
              <img src="size.png" alt="size" />
              <span>{post.postDetail.size} sqft</span>
            </div>
            <div className="size">
              <img src="bed.png" alt="bed" />
              <span>{post.bedroom} beds</span>
            </div>
            <div className="size">
              <img src="bath.png" alt="bathroom" />
              <span>{post.bathroom} bathroom</span>
            </div>
          </div>
          <p className="title">Nearby Places</p>
          <div className="list-horizontal">
            <div className="feature">
              <img src="school.png" alt="" />
              <div className="feature-text">
                <span>School</span>
                <p>{post.postDetail.school}m away</p>
              </div>
            </div>
            <div className="feature">
              <img src="bus.png" alt="" />
              <div className="feature-text">
                <span>Bus Stop</span>
                <p>{post.postDetail.bus}m away</p>
              </div>
            </div>
            <div className="feature">
              <img src="fee.png" alt="" />
              <div className="feature-text">
                <span>Restaurant</span>
                <p>{post.postDetail.restaurant}m away</p>
              </div>
            </div>
          </div>
          <p className="title">Location</p>
          <div className="map-container">
            <Map items={[post]} />
          </div>

          <div className="buttons">
            <button>
              <img src="chat.png" alt="chat-icon" />
              Send a Message
            </button>

            <button>
              <img src="save.png" alt="chat-icon" />
              Save the Place
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListDetails;
