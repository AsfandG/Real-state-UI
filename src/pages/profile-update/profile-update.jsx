import { useState } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import apiRequest from "../../lib/api-request";
import "./profile-update.scss";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function ProfileUpdatePage() {
  const { updateUser, currentUser } = useAuthContext();
  const [error, setError] = useState("");

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);

    try {
      const res = await apiRequest.put(`/users/${currentUser.id}`, formData);

      updateUser(res.data);
      toast.success("Profile updated successfully!");
      navigate("/profile");
    } catch (error) {
      console.log(error);
      setError(error.response.data.message);
    }
  }
  return (
    <div className="profileUpdatePage">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Update Profile</h1>

          <div className="item">
            <label htmlFor="avatar">Avatar</label>
            <input type="file" name="avatar" />
          </div>
          <div className="item">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              name="username"
              type="text"
              defaultValue={currentUser?.username}
            />
          </div>
          <div className="item">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              defaultValue={currentUser?.email}
            />
          </div>
          <div className="item">
            <label htmlFor="password">Password</label>
            <input id="password" name="password" type="password" />
          </div>
          <button>Update</button>

          {error && <div>{error}</div>}
        </form>
      </div>
      <div className="sideContainer">
        <img
          src={
            currentUser?.avatar ||
            "https://static.vecteezy.com/system/resources/thumbnails/003/337/584/small/default-avatar-photo-placeholder-profile-icon-vector.jpg"
          }
          alt=""
          className="avatar"
        />
      </div>
    </div>
  );
}

export default ProfileUpdatePage;
