import propTypes from 'prop-types';

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

const Statistic = ({ label, percentage, className }) => (
  <li
    style={{
      backgroundColor: colors[Math.floor(Math.random() * colors.length)],
    }}
    className={className}
  >
    <span className="label">{label} </span>
    <span style={{ fontWeight: 'bold' }}>{percentage} %</span>
  </li>
);

Statistic.propTypes = {
  label: propTypes.string.isRequired,
  percentage: propTypes.number.isRequired,
  className: propTypes.string.isRequired,
};
export default Statistic;
