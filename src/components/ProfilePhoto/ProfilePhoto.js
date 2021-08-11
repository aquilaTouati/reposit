import "./ProfilePhoto.css";
import profile from "../../profile.jpg";

function ProfilePhoto() {
  return (
    <div className="picture">
      <img style={{ width: "100%" }} src={profile} />
    </div>
  );
}

export default ProfilePhoto;
