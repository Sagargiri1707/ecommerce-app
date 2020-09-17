import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
function StripeButton({price}) {
    const priceForStripe = price * 100
    const publishableKey='pk_test_51HSOVAJlaiBH94eNiIgifApP225KmutQPPrhOoWgJxliTtWHPuD52w23oOsfGf98YQCx2CfTrmR8ekjRUSNq557y00CoJ3rj28'
    const onToken = (token) => {
        alert('payment successfull')
    }
    return (
        <div>
            <StripeCheckout
                label="Pay now"
                name="BillDesk"
                billingAddress
                shippingAddress
                image=''
                description={`your total is ${price}`}
                amount={priceForStripe}
                token={onToken}
                stripeKey={publishableKey}
            />
        </div>
    );
}

export default StripeButton;