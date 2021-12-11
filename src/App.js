import Profile from './components/profile/profile';
import user from './data/user.json';

const App = () => {
  return (
    <div className="profile">
      <Profile
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
    </div>
  );
};

export default App;
