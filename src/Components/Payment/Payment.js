// 
import React, { useState } from "react";
import "./payment.css";

const Payment = () => {
  const [payments, setPayments] = useState([
    { id: 1, name: "Gold Plan", price: "$50/month", features: ["Unlimited profile views", "Access to all premium features", "24/7 customer support"], image: "gold-card.jpg" },
    { id: 2, name: "Premium Plan", price: "$100/month", features: ["Priority profile listing", "Verified badge", "Personal account manager", "Background check"], image: "premium-card.jpg" },
    { id: 3, name: "Diamond Plan", price: "$200/month", features: ["Profile promotion on social media", "Professional photoshoot", "Compatibility report", "Customized matchmaking service"], image: "diamond-card.jpg" },
    { id: 4, name: "Prime Plan", price: "$300/month", features: ["All-inclusive VIP service", "Exclusive access to top matches", "Private consultation with a relationship expert", "100% satisfaction guarantee"], image: "prime-card.jpg" },
  ]);

  const [selectedPayment, setSelectedPayment] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  const handlePaymentChange = (event) => {
    setSelectedPayment(Number(event.target.value));
  };

  return (
    <div className="payment-container">
      <h2 className="payment-header">Pay now for Perfect Matches</h2>
      <div className="payment-options">
        {payments.slice(0, showAll ? payments.length : 3).map((payment) => (
          <label key={payment.id} htmlFor={`payment-option-${payment.id}`} className={`payment-option ${selectedPayment === payment.id ? 'selected' : ''}`}>
            <input type="radio" id={`payment-option-${payment.id}`} name="payment-option" value={payment.id} onChange={handlePaymentChange} />
            <div className="payment-image">
              <img src={payment.image} alt={payment.name} />
            </div>
            <div className="payment-details">
              <h3 className="payment-name">{payment.name}</h3>
              <p className="payment-price">{payment.price}</p>
              <ul className="payment-features">
                {payment.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </div>
          </label>
        ))}
      </div>
      {!showAll && (
        <div className="view-all" onClick={toggleShowAll}>
          <p>View all payment options</p>
        </div>
      )}
    </div>
  );
};

export default Payment;
