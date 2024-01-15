import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { TEST_CLIENT_KEY } from "../constant";
import { Col, Container, Row } from "reactstrap";
import StripeCheckout from "./StripeCheck";

const stripePromise = loadStripe(TEST_CLIENT_KEY);

export default function CreditCard() {
  return (
    <Container>
      <Row>
        <Col>
          <Elements stripe={stripePromise}>
            <StripeCheckout />
          </Elements>
        </Col>
      </Row>
    </Container>
  );
}
