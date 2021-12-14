import propTypes from 'prop-types';
import { Wrapper, Thead, Article } from './TransactionHistory.styled';

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
          <tr key={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        ))}
      </tbody>
    </Wrapper>
  );
};

export default TableHistory;

TableHistory.propTypes = {};
