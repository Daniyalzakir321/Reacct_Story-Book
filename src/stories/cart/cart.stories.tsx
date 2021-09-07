import React from 'react';
import Cart from '../../components/cart/cart';

export default {
    title: 'Cart',
    component: Cart
}

export function Cart_Large() {
    return (
        <Cart
            title={`Card Title Large`}
            text={`Some quick example text to build on the card title and make up the bulk of the card's content.`}
            title_font={31}
            text_font={13}
        />
    )
}

export function Cart_Medium() {
    return (
        <Cart title={`Card Title Medium`}
            text={`Some quick example text to build on the card title and make up the bulk of the card's content.`}
            title_font={28}
            text_font={12}
        />
    )
}

export function Carts_Small() {
    return (
        <Cart title={`Card Title Small`}
            text={`Some quick example text to build on the card title and make up the bulk of the card's content.`}
            title_font={25}
            text_font={11}
        />
    )
}

