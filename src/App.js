import Profile from './components/profile/profile';
import user from './data/user.json';
import StatisticList from './components/Statistics/statisticList';
import data from './data/data.json';
import FriendList from './components/FriendListItem/FriendList';
import friends from './data/friends.json';
import TableHistory from './components/TransactionHistory/TransactionHistory';
import transactions from './data/transactions.json';

const App = () => {
  return (
    <>
      <section className="profile">
        <Profile
          avatar={user.avatar}
          username={user.username}
          tag={user.tag}
          location={user.location}
          stats={user.stats}
        />
      </section>

      <section className="statistics">
        <StatisticList stats={data} title="Upload stats" />
      </section>

      <section className="statistics">
        <FriendList friends={friends}></FriendList>
      </section>

      <TableHistory items={transactions}></TableHistory>
    </>
  );
};

export default App;
