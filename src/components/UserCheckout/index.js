import { useDetails } from "../../context/productContext";
import { useState } from "react";
import "./index.css";

const UserCheckout = () => {
  const [user, setUser] = useState({ name: "", email: "", mobileNumber: 91 });
  const [errorMsg, setErrorMessage] = useState("");
  const [showError, setShowError] = useState(false);

  const data = useDetails();
  const { cartList } = data;
  let total = 0;
  cartList.forEach((each) => {
    total += each.price * each.quantity;
  });

  const submitForm = (e) => {
    e.preventDefault();
    const { name, email, mobileNumber } = user;
    if (!email.match(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/)) {
      setErrorMessage("Enter valid email");
      setShowError(true);
    } else {
      setShowError(false);
      const orderDetails = cartList.map((each) => ({
        name: each.name,
        brand: each.brand,
        quantity: each.quantity,
        total_price: each.price * each.quantity,
      }));

      console.log(JSON.stringify(orderDetails));
      console.log(
        JSON.stringify({
          name: name,
          mobile_number: `+91${mobileNumber}`,
          email: email,
          quantity: cartList.length,
          orderTotal: total,
        })
      );
    }
  };

  return (
    <>
      <form className="cart-summary-container" onSubmit={submitForm}>
        <h1 className="order-total-value">
          Order Total:
          <span className="order-total-label"> Rs {total}/-</span>
        </h1>
        <p className="total-items">Total Items: {cartList.length}</p>
        <div className="input-label-container">
          <label className="input-label" htmlFor="name">
            Name
          </label>
          <input
            className="input"
            type="text"
            placeholder="Name"
            id="name"
            minLength={3}
            maxLength={50}
            value={user.name}
            onChange={(e) =>
              setUser({
                ...user,
                name: e.target.value.replace(/[^a-zA-Z]/gi, ""),
              })
            }
          />
        </div>
        <div className="input-label-container">
          <label className="input-label" htmlFor="email">
            Email
          </label>
          <input
            className="input"
            type="email"
            placeholder="Email"
            id="email"
            minLength={16}
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </div>
        <div className="input-label-container">
          <label className="input-label" htmlFor="mobileNumber">
            Mobile Number
          </label>
          <input
            className="input"
            type="text"
            placeholder="Mobile Number"
            id="MobileNumber"
            maxLength={10}
            minLength={10}
            value={user.mobileNumber}
            onChange={(e) =>
              setUser({
                ...user,
                mobileNumber: e.target.value.replace(/[^0-9]/gi, ""),
              })
            }
          />
        </div>
        {showError && <p className="error-message">{errorMsg}</p>}
        <button type="submit" className="checkout-button">
          Checkout
        </button>
      </form>
    </>
  );
};
export default UserCheckout;
