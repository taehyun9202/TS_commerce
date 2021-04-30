import React from "react";
import { Wrapper } from "./Cart.styles";
import { CartItemType } from "../App";
import CartItem from "./CartItem";

type Props = {
  cartItems: CartItemType[];
  handleAddToCart: (clickedItem: CartItemType) => void;
  handleRemoveFromCart: (id: number) => void;
};

const Cart: React.FC<Props> = ({
  cartItems,
  handleAddToCart,
  handleRemoveFromCart,
}) => {
  const calculateTotal = (items: CartItemType[]) =>
    items.reduce((total: number, item) => total + item.amount * item.price, 0);
  return (
    <Wrapper>
      <h2>Cart</h2>
      {cartItems.length === 0 && <p>Cart is Empty</p>}
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          handleAddToCart={handleAddToCart}
          handleRemoveFromCart={handleRemoveFromCart}
        />
      ))}

      <h2>Total : ${calculateTotal(cartItems).toFixed(2)}</h2>
    </Wrapper>
  );
};

export default Cart;
