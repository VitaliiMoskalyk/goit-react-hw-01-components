import propTypes from 'prop-types';
import Statistic from './Statistics/statisticEl';
import s from './Statistics/statistic.module.css';

const colors = [
  '#00FF7F',
  '#FF1493',
  '#FFD700',
  '#FF00FF',
  '#8A2BE2',
  '#0000CD',
  '#DAA520',
  '	#D2691E',
];

const StatisticList = ({ stats, title }) => {
  return (
    <div>
      {title && <h2 className={s.title}>{title}</h2>}

      <ul className={s.statList}>
        {stats.map(({ id, label, percentage }) => (
          <li
            className={s.item}
            style={{
              backgroundColor:
                colors[Math.floor(Math.random() * colors.length)],
            }}
            key={id}
          >
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
