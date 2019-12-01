const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

// export default async (req, res) => {
//   const session = await stripe.checkout.sessions.create({
//     payment_method_types: ["card"],
//     line_items: [
//       {
//         name: "T-shirt",
//         description: "Comfortable cotton t-shirt",
//         images: ["https://example.com/t-shirt.png"],
//         amount: 500,
//         currency: "usd",
//         quantity: 1
//       }
//     ],
//     success_url: "https://example.com/success",
//     cancel_url: "https://example.com/cancel"
//   });

//   res.json(session);
// };



export default async (req, res) => {
  const session1 = await stripe.checkout.sessions.create({
    client_reference_id: 'basic',
    payment_method_types: ['card'],
    subscription_data: {
      items: [
        {
          plan: 'plan_GHYBg5qcDFyUQQ', //BASIC
        }
    ],
    },
    success_url: 'https://example.com/success?session_id={CHECKOUT_SESSION_ID}',
    cancel_url: 'https://example.com/cancel',
  });

  const session2 = await stripe.checkout.sessions.create({
    client_reference_id: 'pro',
    payment_method_types: ['card'],
    subscription_data: {
      items: [
        {
          plan: 'plan_GHYDJPvzC8Rn6P', //PRO 
        }
    ],
    },
    success_url: 'https://example.com/success?session_id={CHECKOUT_SESSION_ID}',
    cancel_url: 'https://example.com/cancel',
  });

  let sessions = [session1, session2]


  res.json(sessions);
}


// stripe.plans.create({
//   nickname: "Car Wash Volume Pricing",
//   product: "{{CAR_WASH_PRODUCT_ID}}",
//   currency: "usd",
//   interval: "month",
//   usage_type: "metered",
//   billing_scheme: "tiered",
//   tiers_mode: "volume",
//   tiers: [
//     {
//       amount: 700,
//       up_to: '5',
//     },{
//       amount: 650,
//       up_to: '10',
//     },{
//       amount: 600,
//       up_to: 'inf}',
//     }
//   ]
// }, function(err, plan) {
//   // asynchronously called
// });
// res.json(session);
//  };