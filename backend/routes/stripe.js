const router = require("express").Router();
const stripe = require("stripe")("sk_test_51JyjbmFNL8ZFguUyeoH1f2qVgsIZYw6smX4K3M1sKfdOq5MKGma4C49CMtgMx83vlnh99hqK5bLgYIFM2tAOSdZJ00iYCQCTzM");



router.post("/payment", (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

module.exports = router;