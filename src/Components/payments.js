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
              <img src={paymentIllustration} alt="Payment Options" className="mb-4 paymentIllustration" />
              </div>
            
              <div>
                {showCreditCard && <CreditCard />}
                {showCashOnDelivery && <CashOnDelivery />}
              </div>
            </div></Col>
        </Row>

      </Container>

    </>

  );
};

export default Payment;
