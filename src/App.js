import Profile from './components/profile/profile';
import Stats from './components/profile/stats';
import user from './data/user.json';

const App = () => {
  return (
    <div className="profile">
      <Profile
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
      />
      <Stats
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.views}
      />
    </div>
  );
};

export default App;
