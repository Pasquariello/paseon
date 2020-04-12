const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async (req, res) => {
	console.log('reg===', req)
	let paymentImag = ''
	let sessions = [];
	const basic_plan_session = await stripe.checkout.sessions.create({
		client_reference_id: 'basic',
		payment_method_types: ['card'],
		subscription_data: {
			items: [
				{
					plan: 'plan_GHYBg5qcDFyUQQ', //BASIC
				}
			],
		},
		success_url: 'http://localhost:3000/payment_success?session_id={CHECKOUT_SESSION_ID}',
		cancel_url: 'https://example.com/cancel',
		//customer_email: 'customer@example.com'
	});
	const pro_plan_session = await stripe.checkout.sessions.create({
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
		//customer_email: 'customer@example.com',
	});
	sessions.push(basic_plan_session, pro_plan_session);
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