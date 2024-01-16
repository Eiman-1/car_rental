import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Col, Container, Modal, ModalBody, ModalHeader, Row } from "reactstrap";

import paymentIllustration from "../Assets/Images/paymentIllustration.jpg";
import CreditCard from '../DBuse/CreditCard'
import CashOnDelivery from '../DBuse/CashOnDelivery'
const Payment = () => {
  const [showCreditCard, setShowCreditCard] = useState(false);
  const [showCashOnDelivery, setShowCashOnDelivery] = useState(false);

  const handleCreditCardClick = () => {
    setShowCreditCard(true);
    setShowCashOnDelivery(false);
  };

  const handleCashOnDeliveryClick = () => {
    setShowCashOnDelivery(true);
    setShowCreditCard(false);
  };

  return (
    <>
      <Container> 
        <Row>
          <Col>
            <div >
              <div className="p-4 m-2 ">
                <Button className="m-4" onClick={handleCreditCardClick}>
                  Pay with Card
                </Button>
                <Button onClick={handleCashOnDeliveryClick}>
                  Cash On Delivery
                </Button>
              </div>
              <div>
                {showCreditCard && <CreditCard />}
                {showCashOnDelivery && <CashOnDelivery />}
              </div>
            </div></Col>
        </Row>

      </Container>


      <div className="">
        {/* <div className="payment-content">
    <div className="payment-text">
      <h2 className="payment-title">Payment Section</h2>
      <p className="payment-subtitle">Secure and Easy Transactions</p>
      
    </div>
    <div className="payment-illustration-container">
      <img
        src={paymentIllustration}
        alt="Payment Illustration"
        className="payment-illustration"
      />
    </div>
  </div> */}
        {/* <Modal isOpen={modal} toggle={toggle}>
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
  </Modal> */}


      </div>
    </>

  );
};

export default Payment;
