import propTypes from 'prop-types';

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <li className="item">
      <img
        className="isOnline"
        src={
          isOnline
            ? 'https://img.icons8.com/emoji/48/000000/green-circle-emoji.png'
            : 'https://img.icons8.com/emoji/48/000000/red-circle-emoji.png'
        }
        width="15px"
        alt=""
      ></img>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  avatar: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  isOnline: propTypes.bool,
};
