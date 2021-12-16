import propTypes from 'prop-types';
import Statistic from './statisticEl';
import s from './statistic.module.css';

const StatisticList = ({ stats, title }) => {
  return (
    <div>
      {title && <h2 className={s.title}>{title}</h2>}

      <ul className={s.statList}>
        {stats.map(({ id, label, percentage }) => (
          <Statistic
            label={label}
            percentage={percentage}
            key={id}
            className={s.item}
          />
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
