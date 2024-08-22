import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { deleteOrder, getUser } from '../store/actions';
import { useDispatch, useSelector } from 'react-redux';

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser()); 
  }, [dispatch]);

  const orders = useSelector((state) => state.orders); 

  const handleDelete = (id) => {
    dispatch(deleteOrder(id))
  }

  return (
    <StyledDiv>
      <Header>
        <StyledPText>Glovo заказы</StyledPText>
        <LoadingText>Loading ...</LoadingText>
        <StyledButtonAdd onClick={() => navigate('/order')}>
          Добавить заказ
        </StyledButtonAdd>
      </Header>

      <StyledTable>
        <thead>
          <tr>
            <TableHeader>Получатель</TableHeader>
            <TableHeader>Отправитель</TableHeader>
            <TableHeader>Адрес доставки</TableHeader>
            <TableHeader>Номер</TableHeader>
            <TableHeader>Сообщение</TableHeader>
            <TableHeader>Действия</TableHeader> 
          </tr>
        </thead>
        <tbody>
          {orders.length > 0 ? (
            orders.map((order) => (
              <TableRow key={order.id}>
                <TableData>{order.recipientName}</TableData>
                <TableData>{order.senderName}</TableData>
                <TableData>{order.address}</TableData>
                <TableData>{order.phoneNumber}</TableData>
                <TableData>{order.courierMessage}</TableData>
                <TableData>
                  <StyledButtonDelete onClick={() => handleDelete(order.id)}>Отменить Заказ</StyledButtonDelete> 
                </TableData>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableData colSpan="6">Нет заказов</TableData> 
            </TableRow>
          )}
        </tbody>
      </StyledTable>
    </StyledDiv>
  );
};

export default Home;

// Стили
const StyledDiv = styled.div`
  width: 1400px;
  height: 600px;
  background-color: white;
  margin: 0 auto;
  margin-top: 80px;
  border: 3px solid aqua;
  border-radius: 12px;
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
  box-sizing: border-box;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const StyledPText = styled.p`
  font-size: 20px;
  font-family: monospace;
  font-weight: bold;
  color: #17e1e5;
`;

const LoadingText = styled.p`
  font-size: 16px;
  font-family: monospace;
  color: #17e1e5;
`;

const StyledButtonAdd = styled.button`
  width: 120px;
  height: 40px;
  background-color: #11c111;
  font-size: 14px;
  font-family: monospace;
  font-weight: bold;
  cursor: pointer;
  color: white;
  border: none;
  border-radius: 5px;
`;

const StyledTable = styled.table`
  width: 100%;
  border: 2px solid aqua;
  border-radius: 12px;
  padding: 10px;
  box-sizing: border-box;
  font-size: 18px;
  text-align: left;
  border-collapse: collapse;
  margin-top: 20px;
  thead {
    background-color: #f0f0f0;
  }
`;

const TableHeader = styled.th`
  padding: 10px;
  color: #17e1e5;
  font-family: monospace;
  font-weight: bold;
  border-bottom: 2px solid #ddd;
`;

const TableData = styled.td`
  padding: 10px;
  border-top: 1px solid #ddd;
  color: #333;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

const StyledButtonDelete = styled.button`
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 6px 12px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #c82333;
  }
  
  &:focus {
    outline: none;
  }
`;
