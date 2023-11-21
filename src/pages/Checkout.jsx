import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { savePayment } from '../store/reducers/paymentSlice';

const Checkout = () => {
    const { from, to, departure, returnDate, method, trainClass } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const payment = async () => {
        await dispatch(savePayment({from, to, departure, returnDate, method, trainClass}));
        navigate('/paymentCompleted');
    }

  return (
    <div>
        <h1>Checkout Form</h1>
        <h2>Billing Address</h2>
        <label>Full Name</label>
        <input type="text" />
        <label>Email</label>
        <input type="email" />

        <h2>Payment</h2>
        <p><b>Accepted Cards</b></p>
        <img src="" alt="visa" />
        <img src="" alt="master-card" /><br />

        <button className='btn btn-info' onClick={()=>payment()}>Pay</button>
    </div>
  )
}

export default Checkout