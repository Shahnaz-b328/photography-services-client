import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CardForm from './../CardForm/CardForm';
const stripePromise = loadStripe('pk_test_51IeBaMCPoN9mVwP1xLxVq6HUyWZVWmDBNbZ6BoMc8LZLM8sVCeNRrxujZjWLC82yP2xksf5ooqGRSWD9R7uTMS8700P6bi0pGD');
const Payment = ({ handlePayment }) => {
    return (
        <div>
            <Elements stripe={stripePromise}>
                <CardForm handlePayment={handlePayment}></CardForm>
            </Elements>
        </div>
    );
};

export default Payment;