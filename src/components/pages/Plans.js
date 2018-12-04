import React, { Component } from 'react';
import Checkout from '../Checkout';

class Plans extends Component {
    render() { 
        const CheckoutStyle = {
            fontSize: '15px',
            textAlign: 'center',
            backgroundColor: 'none',
            backgroundImage: 'none',
            color: '000'
          };
        return (
            <div>
                <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                    <h2 className="display-4">Pricing</h2>
                    <p className="lead">Join our growing community of professionals!</p>
                    </div>

                    <div className="container">
                    <div className="card-deck mb-3 text-center">
                        <div className="card mb-4 shadow-sm">
                        <div className="card-header">
                            <h4 className="my-0 font-weight-normal">BASIC</h4>
                        </div>
                        <div className="card-body">
                            <h1 className="card-title pricing-card-title">$99.99 <small className="text-muted">/ mo</small></h1>
                            <ul className="list-unstyled mt-3 mb-4">
                                <li>10 days included</li>
                                <li>2 GB of storage</li>
                                <li>Email support</li>
                                <li>Help center access</li>
                            </ul>
                            <Checkout
                                name={'Basic Plan'}
                                description={'Duh its the basic Plan'}
                                amount={9999}
                            />
                        </div>
                        </div>
                        <div className="card mb-4 shadow-sm">
                        <div className="card-header">
                            <h4 className="my-0 font-weight-normal">LEGIT</h4>
                        </div>
                        <div className="card-body">
                            <h1 className="card-title pricing-card-title">$199.99 <small className="text-muted">/ mo</small></h1>
                                <ul className="list-unstyled mt-3 mb-4">
                                    <li>15 days included</li>
                                    <li>10 GB of storage</li>
                                    <li>Priority email support</li>
                                    <li>Help center access</li>
                                </ul>
                            
                            <Checkout
                                style={CheckoutStyle}
                                className="button special alt"
                                name={'Legit Plan'}
                                description={'Purchased Legit Plan'}
                                amount={19999}
                            />
                        </div>
                        </div>
                        <div className="card mb-4 shadow-sm">
                        <div className="card-header">
                            <h4 className="my-0 font-weight-normal">DOPE</h4>
                        </div>
                        <div className="card-body">
                            <h1 className="card-title pricing-card-title">$299.99 <small className="text-muted">/ mo</small></h1>
                                <ul className="list-unstyled mt-3 mb-4">
                                    <li>30 days included</li>
                                    <li>15 GB of storage</li>
                                    <li>Moral support</li>
                                    <li>Help center access</li>
                                </ul>
                            <Checkout 
                                name={'Dank Plan'}
                                description={'Purchased the DOPE Plan'}
                                amount={29999}
                            />
                        </div>
                        </div>
                    </div>
                 </div>
            </div>
        );
    }
}
 
export default Plans;