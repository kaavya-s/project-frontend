import React, { useState } from "react";
import TheNav from "./Header/TheNav";
import Sections from "./Sections/Sections";
import Cart from "./Cart/Cart";
import CartProvider from "./store/CartProvider";
import TheFooter from "./Footer/TheFooter";
import Swal from "sweetalert2";
const App = () => {
  //Using useState hook
  const [cartIsShown, setCartIsShown] = useState(false);
  //END

  //Managing the state of the cart component using useState
  const onShowCartHandler = () => {
    setCartIsShown(true);
  };

  const onCloseCartHandler = () => {
    setCartIsShown(false);
    
  };
  //END

  //EVent to occur on Order
  const onOrderHandler = () => {
    setCartIsShown(false);

    Swal.fire({
      title: "Successful!",
      text: "Your order is on the way",
      icon: "success",
    });
  };

  //END

  //Rendering the cart and all the sections
  return (
    <CartProvider>
      {cartIsShown && (
        <Cart onCloseCart={onCloseCartHandler} onOrder={onOrderHandler} />
      )}
      <TheNav onShowCart={onShowCartHandler} />
      <Sections />
      <TheFooter />
    </CartProvider>
  );
  //END
};

export default App;