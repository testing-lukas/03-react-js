import "./ProfileCard.css";

import Avatar from "../avatar/Avatar";

const ProfileCard = props => {
  const { name, profession, imageUrl } = props;

  return (
    <div className="card">
      <Avatar src={imageUrl} />
      <h3 className="heading">{name}</h3>
      <p className="profession">{profession}</p>
    </div>
  );
};

export default ProfileCard;
