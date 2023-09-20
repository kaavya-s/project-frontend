import React from "react";
import classes from "./CartItem.css";
import "./CartItem.css";
import axios from "axios";

const CartItem = (props) => {
  //Converting the prices to two decimal place

  const price = `Rs${props.price.toFixed(2)}`;

  //ENDS
  const apiUrl='http://localhost:8080/api/orders/';
  const handleSubmit = async (e) => {
      e.preventDefault();
      try {
              await axios.post(`${apiUrl}place`, {
             
          },{
              timeout:5000,
          }).then((response)=>{
          alert("Registerd Successfully");
          // navigate("/home")
          console.log(response.data)
          }); // Handle the response data as needed
      } catch (error) {
          alert(error);
          console.error('Error registering user:', error);
      }
  };
  //Layout and structure of the items to be passed to the cart component via props
  return (
    <>
      <div className="item">
        <div className="item_content">
          <div className="item_img_div">
            <img
              className="item_image"
              src={props.src}
              alt="food"
            ></img>
          </div>
          <div className="item_value">
            <div className="item_name_div">
              <p>{props.name}</p>
            </div>
            <div className="item_info_div">
              <p>{price}</p>
              <p>x {props.amount}</p>
            </div>
          </div>
        </div>
        <div className="item_buttons">
          <div onClick={props.onRemove}>
            <i className="bi bi-dash"></i>
          </div>
          <div onClick={props.onAdd}>
            <i className="bi bi-plus"></i>
          </div>
        </div>
      </div>
    </>
  );
  //ENDS
};

export default CartItem;