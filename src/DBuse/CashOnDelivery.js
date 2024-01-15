import React, { useState } from "react";
import {
  Button,
  Card,
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
      <Row>
        <Col>
          <h5>Cash on Delivery</h5>
          <Card className="shadow-sm p-3">
            <Form
              onSubmit={(e) => {
                e.preventDefault();
                submit();
              }}
            >
              <FormGroup>
                <Label>Name</Label>
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
                <Label>Email</Label>
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
              <FormGroup>
                <Label>City</Label>
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
              <FormGroup>
                <Label>Street No</Label>
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
              <FormGroup>
                <Label>House No</Label>
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
              <Button className="bg-success" type="submit">
                Submit
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
