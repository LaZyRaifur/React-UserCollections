import React from 'react';


const Cart = (props) => {
    const cart = props.cart;
    const Total_Yearly_income = cart.reduce((sum,person)=>sum + person.Yearly_income, 0);
    
    return (
        <div>
            <h2>This is Cart: {cart.length}</h2>
    <p>Total Income: {Total_Yearly_income}</p>
        </div>
    );
};

export default Cart;