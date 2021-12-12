import propTypes from 'prop-types';
import s from './profile.module.css';

const Profile = ({
  avatar,
  username,
  tag,
  location,
  followers,
  views,
  likes,
}) => (
  <div className={s.description}>
    <img src={avatar} alt="User avatar" className={s.avatar} />
    <p className={s.name}>{username}</p>
    <p className={s.tag}>@{tag}</p>
    <p className={s.location}>{location}</p>
    <ul>
      <li className={s.stats}>
        <span className={s.label}>Followers </span>
        <span className={followers > 1500 ? s.quantity : s.quantityGreen}>
          {followers}
        </span>
      </li>
      <li className={s.stats}>
        <span className={s.label}>Views</span>
        <span className={views > 1500 ? s.quantity : s.quantityGreen}>
          {views}
        </span>
      </li>
      <li className={s.stats}>
        <span className={s.label}>Likes</span>
        <span className={likes > 1500 ? s.quantity : s.quantityGreen}>
          {likes}
        </span>
      </li>
    </ul>
  </div>
);

Profile.propTypes = {
  username: propTypes.string.isRequired,
  tag: propTypes.string.isRequired,
  location: propTypes.string.isRequired,
  avatar: propTypes.string.isRequired,
  followers: propTypes.number.isRequired,
  views: propTypes.number.isRequired,
  likes: propTypes.number.isRequired,
};

export default Profile;
