// Checkout.js
import React, { useState } from 'react';

const Checkout = () => {
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    address: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleOrderPlacement = () => {
    // Process the order using the 'userInfo' state
    // Display order confirmation to the user
  };

  return (
    <div>
      <h2>Checkout</h2>
      <form>
        <label>Name:</label>
        <input type="text" name="name" value={userInfo.name} onChange={handleInputChange} />

        <label>Email:</label>
        <input type="email" name="email" value={userInfo.email} onChange={handleInputChange} />

        <label>Address:</label>
        <textarea name="address" value={userInfo.address} onChange={handleInputChange} />

        <button type="button" onClick={handleOrderPlacement}>Place Order</button>
      </form>
    </div>
  );
}

export default Checkout;
