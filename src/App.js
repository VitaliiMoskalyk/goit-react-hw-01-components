import Profile from './components/profile/profile';
import user from './data/user.json';
import StatisticList from './components/statisticList';
import data from './data/data.json';

const App = () => {
  return (
    <>
      <section className="profile">
        <Profile
          avatar={user.avatar}
          username={user.username}
          tag={user.tag}
          location={user.location}
          followers={user.stats.followers}
          views={user.stats.views}
          likes={user.stats.likes}
        />
      </section>

      <section className="statistics">
        <StatisticList stats={data} title="Upload stats" />
      </section>
    </>
  );
};

export default App;
