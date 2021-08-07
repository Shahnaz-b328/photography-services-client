import React from 'react';
import { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
const CardForm = ({ handlePayment }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [paymentError, setPaymentError] = useState(null);
    const [paymentSuccess, setPaymentSuccess] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const cardElement = elements.getElement(CardElement);

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        if (error) {
            console.log('[error]', error);
            setPaymentError(error.message)
            setPaymentSuccess(null)
        } else {
            setPaymentSuccess(paymentMethod.id)
            setPaymentError(null)
            handlePayment(paymentMethod.id)
            console.log('[PaymentMethod]', paymentMethod);
        }
    };
    return (
        <div>
            <form onSubmit={handleSubmit} className="mx-5">
                <CardElement />
                <button style={{
                    marginTop: '5px',
                    backgroundColor: 'indigo',
                    color: 'ivory',
                    marginLeft: ' 60px',
                    height: '50px',
                    width: '100px',
                    border: ' none'
                }} type="submit" disabled={!stripe}>
                    Pay
                </button>
            </form>
            {
                paymentError && <p style={{ color: 'red', marginTop: '7px' }}>{paymentError}</p>
            }
            {
                paymentSuccess && <p style={{ color: 'green', marginTop: '7px' }}>Your payment was successful</p>
            }
        </div>
    );
};

export default CardForm;