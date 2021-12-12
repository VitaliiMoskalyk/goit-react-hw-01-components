import propTypes from 'prop-types';
import Statistic from './Statistics/statisticEl';

const StatisticList = ({ stats, title }) => {
  return (
    <div>
      {title && <h2 className="title">{title}</h2>}

      <ul className="stat-list">
        {stats.map(({ id, label, percentage }) => (
          <li className="item" key={id}>
            <Statistic label={label} percentage={percentage}></Statistic>
          </li>
        ))}
      </ul>
    </div>
  );
};

StatisticList.prototype = {
  stats: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
    }),
  ).isRequired,

  title: propTypes.string.isRequired,
};

export default StatisticList;
