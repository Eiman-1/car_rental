const express = require("express");
const cors = require("cors");
const app = express();
require('dotenv').config()
// Body parser
app.use(express.json());
app.use(cors());
const stripe = require("stripe")(
  "sk_test_51Nzk8MDS0KG3dKkzEJI8z9xUmvcBAlgp7dIMhddyXbbTm2fHzUokaWZb3KcDzFttkho130YqnFjfkcgZMgnsHHOy00Bmha5LrT"
);

app.post("/createsubscription", async (req, res) => {
  try {
    const { amountInCents, email, token } = req.body;
    
    // Create a product
    const product = await stripe.products.create({
      name: "Droidbot",
      description: "Droidbot provides the facility to chat with a bot",
    });

    // Create a price for the product
    const price = await stripe.prices.create({
      unit_amount: amountInCents,
      currency: "usd",
      recurring: {
        interval: "month", // Change as needed
      },
      product: product.id,
    });

    // Create a customer
    const customer = await stripe.customers.create({
      email: email,
      source: token, // This token should come from your client-side Stripe.js integration
    });
    // Create a subscription using the customer and price
    const subscription = await stripe.subscriptions.create({
      customer: customer.id,
      items: [{ price: price.id }],
    });
    // Send a success response
    res.json({
      success: true,
      message: "Your subscription successfully done!",
      subscription,
    });
  } catch (error) {
    // Send a failure response
    res.status(500).json({
      success: false,
      message: "Your subscription failed!",
      error: error.message,
    });
  }
});
const port = 5000;
exports.app = app.listen(port, () => {
  console.log(port, "port");
});
