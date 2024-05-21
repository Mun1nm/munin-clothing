import { useContext } from 'react';

import { CartContext } from '../../context/cart.context';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import './checkout.styles.scss'

const Checkout = () => {
    const { cartItems, cartTotal } = useContext(CartContext);

    return (
        <div className='checkout-container'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Produto</span>
                </div>
                <div className='header-block'>
                    <span>Descrição</span>
                </div>
                <div className='header-block'>
                    <span>Quantidade</span>
                </div>
                <div className='header-block'>
                    <span>Preço</span>
                </div>
                <div className='header-block'>
                    <span>Remover</span>
                </div>
            </div>
            <div className='cart-items-container-inside'>
                {
                    cartItems.map((cartItem) => (
                        <CheckoutItem  key={cartItem.id} cartItem={cartItem}/>
                    ))
                }
            </div>
            <span  className='total'>Total: ${cartTotal}</span>
        </div>
    )
}

export default Checkout;