import styled from '@emotion/styled';

export const Wrapper = styled.table`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 0.1px solid rgb(213, 218, 218);
  box-shadow: 17px 18px 15px -5px rgba(68, 67, 67, 0.75);
  font-family: cursive;
  margin: 16px 0;

  width: 250px;
  margin-left: auto;
  margin-right: auto;
`;

export const Thead = styled.thead`
  text-align: center;
`;

export const Article = styled.th`
  text-align: center;
  width: 83px;
`;

export const Row = styled.td`
  width: 83px;
  text-align: start;
  border: 0.1px solid rgb(213, 218, 218);
`;

export const MainRow = styled.tr`
  background-color: ${props => props.id}6e;
`;
