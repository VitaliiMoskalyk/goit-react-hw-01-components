import propTypes from 'prop-types';
import s from './profile.module.css';

const Profile = ({ avatar, username, tag, location, stats }) => (
  <div className={s.description}>
    <img src={avatar} alt="User avatar" className={s.avatar} />
    <p className={s.name}>{username}</p>
    <p className={s.tag}>@{tag}</p>
    <p className={s.location}>{location}</p>
    <ul>
      <li className={s.stats}>
        <span className={s.label}>Followers </span>
        <span className={stats.followers > 1500 ? s.quantity : s.quantityGreen}>
          {stats.followers}
        </span>
      </li>
      <li className={s.stats}>
        <span className={s.label}>Views</span>
        <span className={stats.views > 1500 ? s.quantity : s.quantityGreen}>
          {stats.views}
        </span>
      </li>
      <li className={s.stats}>
        <span className={s.label}>Likes</span>
        <span className={stats.likes > 1500 ? s.quantity : s.quantityGreen}>
          {stats.likes}
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
  stats: propTypes.objectOf(propTypes.number),
};

export default Profile;
