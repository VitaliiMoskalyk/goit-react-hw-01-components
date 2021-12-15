import propTypes from 'prop-types';
import {
  Wrapper,
  Thead,
  Article,
  Row,
  MainRow,
} from './TransactionHistory.styled';

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

const TableHistory = ({ items }) => {
  return (
    <Wrapper>
      <Thead>
        <tr>
          <Article>Type</Article>
          <Article>Amount</Article>
          <Article>Currency</Article>
        </tr>
      </Thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <MainRow
            key={id}
            id={colors[Math.floor(Math.random() * colors.length)]}
          >
            <Row>{type}</Row>
            <Row>{amount}</Row>
            <Row>{currency}</Row>
          </MainRow>
        ))}
      </tbody>
    </Wrapper>
  );
};

export default TableHistory;

TableHistory.propTypes = {
  items: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      type: propTypes.string.isRequired,
      amount: propTypes.string.isRequired,
      currency: propTypes.string.isRequired,
    }),
  ).isRequired,
};
