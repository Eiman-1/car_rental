import {
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
  Elements,
  ElementsConsumer,
  ApplePayButton,
  PaymentRequestButtonElement,
  useStripe,
} from "@stripe/react-stripe-js";
import React from "react";
import {
  Button,
  Card,
  CardBody,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
  Spinner,
} from "reactstrap";
import { TEST_CLIENT_KEY } from "../constant";
import { loadStripe } from "@stripe/stripe-js";

import { useState } from "react";

let stripePromise = loadStripe(TEST_CLIENT_KEY);

const StripeCheckout = () => {
  const [paymentLoader, setPaymentLoader] = useState(false);
  const [stripeError, setStripeError] = useState(false);
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const stripe = useStripe();
  const handleStripError = (message) => {
    setStripeError(true);
    setErrorMessage(message);
    setTimeout(() => {
      setStripeError(false);
      setErrorMessage("");
    }, 3000);
  };
  return (
    <div>
      <Card className="shadow border-0   p-2 mt-3 ">
        <CardBody className="px-lg-5 pt-lg-2 pb-lg-2">
          <div className=" d-flex flex-column justify-content-center align-items-center">
            <h5 className="font-weight-bold">Pay with Card</h5>
          </div>
          <Elements stripe={stripePromise}>
            <ElementsConsumer>
              {({ elements, stripe }) => (
                <Form
                  onSubmit={async (e) => {
                    e.preventDefault();
                    setPaymentLoader(true);
                    const cardElement = elements.getElement(CardNumberElement);
                    const cardElement2 = elements.getElement(CardExpiryElement);
                    const cardElement3 = elements.getElement(CardCvcElement);

                    let { error, paymentMethod } =
                      await stripe.createPaymentMethod({
                        type: "card",
                        card: cardElement,
                        card: cardElement2,
                        card: cardElement3,
                      });
                    if (error) {
                      handleStripError(error.message);
                      setPaymentLoader(false);
                    } else {
                      const result = await stripe.createToken(cardElement);

                      if (result.error) {
                        handleStripError(error.message);
                        setPaymentLoader(false);
                      } else {
                        console.log(result.token.id,'result.token.id')
                        let body = {
                          Token: result.token.id,
                          Email: email,
                          amountInCents: 20 * 100,
                        };
                        await fetch("http://localhost:9090/creditcard", {
                          method: "POST",
                          headers: { "Content-type": "application/json" },
                          body: JSON.stringify(body),
                        }).then(() => {
                          console.log("Record Added Successfully!");
                        });
                        await fetch(
                          "http://localhost:5000/createsubscription",
                          {
                            method: "POST",
                            headers: { "Content-type": "application/json" },
                            body: JSON.stringify(body),
                          }
                        ).then(() => {
                          alert("payment Added Successfully!");
                          setPaymentLoader(false);
                        });
                      }

                    }
                  }}
                >
                  <>
                    <FormGroup>
                      <Label>Email</Label>
                      <Input
                        value={email}
                        placeholder="Enter the email"
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                      ></Input>
                    </FormGroup>
                    <FormGroup>
                      <Label className="form_label">Card number</Label>
                      <div
                        className="form-control mt-2 d-flex shadow-sm"
                        style={{
                          justifyContent: "space-between",
                        }}
                      >
                        <i className="fa fa-credit-card"></i>
                        <div
                          style={{
                            flexBasis: "90%",
                          }}
                        >
                          <CardNumberElement
                            required
                            options={{
                              placeholder: "4242 4242 4242 4242",
                              style: {
                                base: {
                                  // backgroundColor: "#232733",
                                  fontSize: "16px",
                                },
                                invalid: {
                                  color: "#9e2146",
                                },
                              },
                            }}
                          />
                        </div>
                      </div>
                    </FormGroup>
                    <div className="row">
                      <div className="col-md-6">
                        <FormGroup>
                          <Label className="form_label">Expiry Date</Label>
                          <div
                            className="form-control mt-2 d-flex shadow-sm"
                            style={{
                              justifyContent: "space-between",
                            }}
                          >
                            <i className="fa fa-calendar"></i>
                            <div
                              style={{
                                flexBasis: "90%",
                              }}
                            >
                              <CardExpiryElement
                                required
                                options={{
                                  placeholder: "MM/YY",
                                  style: {
                                    base: {
                                      fontSize: "16px",
                                    },
                                    invalid: {
                                      color: "#9e2146",
                                    },
                                  },
                                }}
                              />
                            </div>
                          </div>
                        </FormGroup>
                      </div>
                      <div className="col-md-6">
                        <FormGroup>
                          <Label className="form_label">CVC/CVV</Label>
                          <div
                            className="form-control mt-2 d-flex shadow-sm"
                            style={{
                              justifyContent: "space-between",
                            }}
                          >
                            <div
                              style={{
                                flexBasis: "80%",
                              }}
                            >
                              <CardCvcElement
                                required
                                options={{
                                  placeholder: "...",
                                  style: {
                                    base: {
                                      fontSize: "16px",
                                    },
                                    invalid: {
                                      color: "#9e2146",
                                    },
                                  },
                                }}
                              />
                            </div>
                          </div>
                        </FormGroup>
                      </div>
                    </div>
                  </>
                  {stripeError && (
                    <p className="mb-0 my-1 text-danger">{errorMessage}</p>
                  )}
                  <Button
                    size="lg"
                    className="btn btn-block"
                    color="primary"
                    type="submit"
                    disabled={paymentLoader}
                  >
                    {paymentLoader ? <Spinner size="sm" /> : "Pay"}
                  </Button>
                </Form>
              )}
            </ElementsConsumer>
          </Elements>
        </CardBody>
      </Card>
    </div>
  );
};

export default StripeCheckout;
