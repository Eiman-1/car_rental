import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Modal, ModalBody, ModalHeader } from "reactstrap";

import paymentIllustration from "../Assets/Images/paymentIllustration.jpg";

const Payment = () => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <div className="payment-container">
      <div className="payment-content">
        <div className="payment-text">
          <h2 className="payment-title">Payment Section</h2>
          <p className="payment-subtitle">Secure and Easy Transactions</p>
          <Button
            className="payment-btn"
            onClick={() => {
              toggle();
            }}
          >
            Pay Now
          </Button>
        </div>
        <div className="payment-illustration-container">
          <img
            src={paymentIllustration}
            alt="Payment Illustration"
            className="payment-illustration"
          />
        </div>
      </div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Choose Payment Method</ModalHeader>
        <ModalBody>
          <div className="payment-options">
            <Link to="/cash-on-delivery">
              <Button className="payment-option-btn payment-btn mx-2">
                <span>Cash on Delivery</span>
              </Button>
            </Link>
            <Link to="/credit-card">
              <Button className="payment-option-btn payment-btn">
                <span>Credit Card</span>
              </Button>
            </Link>
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default Payment;
