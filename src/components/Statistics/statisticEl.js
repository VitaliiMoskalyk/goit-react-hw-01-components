import propTypes from 'prop-types';

const Statistic = ({ label, percentage }) => (
  <>
    <span className="label">{label} </span>
    <span style={{ fontWeight: 'bold' }}>{percentage} %</span>
  </>
);

Statistic.propTypes = {
  label: propTypes.string.isRequired,
  percentage: propTypes.number.isRequired,
};
export default Statistic;
