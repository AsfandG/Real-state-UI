import { useNavigate } from "react-router-dom";
import Chat from "../../components/chat/chat";
import List from "../../components/list/list";
import apiRequest from "../../lib/api-request";
import "./profile.scss";

const Profile = () => {
  const navigate = useNavigate();

  async function handleLogout() {
    try {
      const response = await apiRequest.post("/auth/logout");
      localStorage.removeItem("user");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="profile-page">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>User Information</h1>
            <button>Update Profile</button>
          </div>
          <div className="info">
            <span>
              Avatar:{" "}
              <img
                src="https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="user-avatar"
              />
            </span>
            <span>
              Username: <b>Jane Doe</b>
            </span>
            <span>
              Email: <b>jane@gmail.com</b>
            </span>
            <button onClick={handleLogout}>Logout</button>
          </div>
          <div className="title">
            <h1>My List</h1>
            <button>Create New Post</button>
          </div>
          <List />
          <div className="title">
            <h1>Saved List</h1>
          </div>
          <List />
        </div>
      </div>
      <div className="chat-container">
        <div className="wrapper">
          <Chat />
        </div>
      </div>
    </div>
  );
};

export default Profile;
