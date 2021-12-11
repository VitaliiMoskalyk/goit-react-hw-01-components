import propTypes from 'prop-types';

const Profile = ({ avatar, username, tag, location }) => (
  <div className="description">
    <img src={avatar} alt="User avatar" className="avatar" />
    <p className="name">{username}</p>
    <p className="tag">@{tag}</p>
    <p className="location">{location}</p>
  </div>
);

Profile.propTypes = {
  username: propTypes.string.isRequired,
  tag: propTypes.string.isRequired,
  location: propTypes.string.isRequired,
  avatar: propTypes.string.isRequired,
};

export default Profile;
