import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from './../../../App';
import { useContext } from 'react';
import Payment from './../Payment/Payment';
import './Booking.css';
const Booking = () => {
    const { title } = useParams();
    const [logInUser, setLogInUser] = useContext(UserContext);
    const [booking, setBooking] = useState([]);

    useEffect(() => {
        fetch(`https://intense-escarpment-80921.herokuapp.com/services/${title}`)
            .then(res => res.json())
            .then(data => setBooking(data))
    }, [title])

    const handlePayment = payment => {
        const orderDetails = {
            ...logInUser,
            ...booking,
            payment,
            orderTime: new Date()
        };


        fetch('https://intense-escarpment-80921.herokuapp.com/addOrder', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderDetails)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('your order placed successfully')
                }
            })
    }
    return (
        <div>
            <div className="booking-details">
                <h2>Name: {logInUser.UserName}</h2>
                <p>Email: {logInUser.email}</p>
                <p>Package Name: {title}</p>
                <p>Price: {booking.price}</p>
            </div>

            <div className="mt-5">
                <Payment handlePayment={handlePayment}></Payment>
            </div>
        </div>
    );
};

export default Booking;