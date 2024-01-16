import React, { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";

export default function CashOnDelivery() {
  const initialState = {
    name: "",
    email: "",
    city: "",
    streetNo: "",
    houseNo: "",
  };
  const [cashDelivery, setCashDelivery] = useState(initialState);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCashDelivery((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const submit = () => {
    fetch("http://localhost:9090/cashondelivery", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(cashDelivery),
    }).then(() => {
      alert("Record Added Successfully!");
    });
  };
  return (
    <Container>
      <Row >
        <Col md={6} className="" >
          {/* <h5>Cash on Delivery</h5> */}
          <Card className="shadow border-0   p-2 mt-3">
            <CardBody className="px-lg-5 pt-lg-2 pb-lg-2">
              <Form
                onSubmit={(e) => {
                  e.preventDefault();
                  submit();
                }}
              >
                <FormGroup >
                  <Label className="d-flex justify-content-start">Name</Label>
                  <Input
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    value={cashDelivery.name}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  />
                </FormGroup>
                <FormGroup>
                  <Label className="d-flex justify-content-start">Email</Label>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    value={cashDelivery.email}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  />
                </FormGroup>
                <Row>
                  <Col md={4}>
                    <FormGroup>
                      <Label className="d-flex justify-content-start">City</Label>
                      <Input
                        name="city"
                        type="text"
                        placeholder="Enter your city"
                        value={cashDelivery.city}
                        onChange={(e) => {
                          handleChange(e);
                        }}
                      />
                    </FormGroup>
                  </Col>
                  <Col md={4}>
                    <FormGroup>
                      <Label className="d-flex justify-content-start">Street No</Label>
                      <Input
                        name="streetNo"
                        type="text"
                        placeholder="Enter your street no"
                        value={cashDelivery.streetNo}
                        onChange={(e) => {
                          handleChange(e);
                        }}
                      />
                    </FormGroup>
                  </Col>
                  <Col md={4}>
                    <FormGroup>
                      <Label className="d-flex justify-content-start">House No</Label>
                      <Input
                        name="houseNo"
                        type="text"
                        placeholder="Enter your house no"
                        value={cashDelivery.houseNo}
                        onChange={(e) => {
                          handleChange(e);
                        }}
                      />
                    </FormGroup>
                  </Col>
                </Row>



                <Button className="bg-success" type="submit">
                  Submit
                </Button>
              </Form>
            </CardBody>

          </Card>
        </Col>
      </Row>
    </Container>
  );
}
