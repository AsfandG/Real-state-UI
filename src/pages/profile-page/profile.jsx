import { useNavigate } from "react-router-dom";
import Chat from "../../components/chat/chat";
import List from "../../components/list/list";
import apiRequest from "../../lib/api-request";
import "./profile.scss";
import { useEffect } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";

const Profile = () => {
  const navigate = useNavigate();

  const { updateUser, currentUser } = useAuthContext();

  const { userInfo } = currentUser ?? {};

  async function handleLogout() {
    try {
      await apiRequest.post("/auth/logout");
      updateUser(null);
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
                src={
                  userInfo.avatar ||
                  "https://static.vecteezy.com/system/resources/thumbnails/003/337/584/small/default-avatar-photo-placeholder-profile-icon-vector.jpg"
                }
                alt="user-avatar"
              />
            </span>
            <span>
              Username: <b>{userInfo.username}</b>
            </span>
            <span>
              Email: <b>{userInfo.email}</b>
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
