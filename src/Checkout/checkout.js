import React from "react";
import './checkout.css';
import { Link } from 'react-router-dom';
import StripeCheckout from 'react-stripe-checkout';

function checkout()
{
    const onToken = (token) => 
    {
        console.log(token)
    }
    return(
        <>
            <div id="AboutHero">
                <div className="header ">
                    <div className="container">
                        <div className="d-flex align-items-center">
                            <div className="ps-5">
                                <h2 className="h1">Checkout</h2>
                                <ul className="paths">
                                    <li className="dvider">
                                        <Link to="/" className="text-decoration-none text-dark">
                                        Home{" "}
                                        </Link>
                                    </li>
                                    <li>Checkout</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container py-5">
                <h2 className="h1 fw-bold text-center">Checkout Now</h2>
                <div className="line line1"></div>
                <div className="line line2"></div>
                <div className="line line1"></div>
                <div className="row py-5 gy-3 ">

                    <StripeCheckout
                    className="w-50"
                    token={onToken}
                    name="Tashtib Payment"
                    currency="USD"
                    amount="90000"
                    stripeKey="pk_test_51MjONIGFP9mleeqXzwIgHARKFUsnPzGg5WkYtfbVrknjsR9f7y8nAArefFFzgLnD9hsa12bkBASJPyU2XixDuicE00Vo38WcKv"
                    />
                </div>
            </div>
        </>
    )
}

export default checkout;