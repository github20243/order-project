import React, { useState } from 'react';
import styled from 'styled-components';
import Label from '../components/Ui/Label';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addOrder } from '../store/actions';

const OrderForm = () => {
  const [formData, setFormData] = useState({
    recipientName: '',
    senderName: '',
    address: '',
    phoneNumber: '',
    courierMessage: '',
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'phoneNumber') {
      const numericValue = value.replace(/\D/g, '');
      setFormData({
        ...formData,
        [name]: numericValue,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addOrder(formData));
    navigate('/'); 
  };

  return (
    <FormContainer onSubmit={submitHandler}>
      <FormTitle>Форма заказа</FormTitle>

      <FormGroup>
        <Label htmlFor="recipientName">Имя получателя</Label>
        <StyledInput
          id="recipientName"
          name="recipientName"
          value={formData.recipientName}
          onChange={handleChange}
          placeholder="Введите имя получателя"
          required
        />
      </FormGroup>

      <FormGroup>
        <Label htmlFor="senderName">Имя отправителя</Label>
        <StyledInput
          id="senderName"
          name="senderName"
          value={formData.senderName}
          onChange={handleChange}
          placeholder="Введите имя отправителя"
          required
        />
      </FormGroup>

      <FormGroup>
        <Label htmlFor="address">Адрес доставки</Label>
        <StyledInput
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Введите адрес доставки"
          required
        />
      </FormGroup>

      <FormGroup>
        <Label htmlFor="phoneNumber">Номер получателя</Label>
        <StyledInput
          id="phoneNumber"
          name="phoneNumber"
          type="text"
          value={formData.phoneNumber}
          onChange={handleChange}
          placeholder="Введите номер получателя"
          required
        />
      </FormGroup>

      <FormGroup>
        <Label htmlFor="courierMessage">Сообщение курьеру</Label>
        <StyledInput
          id="courierMessage"
          name="courierMessage"
          value={formData.courierMessage}
          onChange={handleChange}
          placeholder="Введите сообщение курьеру"
          required
        />
      </FormGroup>

      <ButtonContainer>
        <CancelButton type="button" onClick={() => navigate('/')}>
          Отмена
        </CancelButton>
        <SubmitButton type="submit">Отправить заказ</SubmitButton>
      </ButtonContainer>
    </FormContainer>
  );
};

export default OrderForm;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  margin-top: 60px;
`;

const FormTitle = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  color: #333;
  font-family: "Roboto", sans-serif;
  font-size: 24px;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const StyledInput = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  width: 100%;
  box-sizing: border-box;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const SubmitButton = styled.button`
  padding: 12px 24px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 18px;
  cursor: pointer;
  font-family: "Roboto", sans-serif;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #218838;
  }
`;

const CancelButton = styled.button`
  padding: 12px 24px;
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 18px;
  cursor: pointer;
  font-family: "Roboto", sans-serif;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #c82333;
  }
`;
