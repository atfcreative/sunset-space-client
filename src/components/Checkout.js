import React from 'react';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';

import STRIPE_PUBLISHABLE from '../constants/stripe';
import PAYMENT_SERVER_URL from '../constants/server';

const CURRENCY = 'USD';

// const fromEuroToCent = amount => amount * 100;

const successPayment = data => {
    alert(`Payment Success brodie...`);
    console.log(data);
};

const errorPayment = data => {
    alert(`Payment Error bruh...`);
    console.log(data);
};

const onToken = (amount, description) => token => 
    
    axios.post(PAYMENT_SERVER_URL,
        {
            description,
            source: token.id,
            currency: CURRENCY,
            amount: amount,
        })
        .then(successPayment)
        .catch(errorPayment);
        // console.log(PAYMENT_SERVER_URL);
        // debugger;

const Checkout = ({ name, description, amount }) =>
        <StripeCheckout
            name={name}
            description={description}
            amount={amount}
            token={onToken(amount, description)}
            currency={CURRENCY}
            stripeKey={STRIPE_PUBLISHABLE}
        />

export default Checkout;