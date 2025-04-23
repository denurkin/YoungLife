import React from "react";
import Container from "../../components/Container/Container.jsx";
import styles from './CartPageContainer.module.css';
import CartPage from "../../components/CartPage/CartPage.jsx";



function CartPageContainer({cartData}) {
  return (
    <>
      <Container>
        <div className={styles.cartNav}>
          {cartData.map((el, id) => (
            <CartPage cartData={el} key={id} numberHover={id}/>
          ))}
        </div>
      </Container>
    </>
  )
}

export default CartPageContainer;