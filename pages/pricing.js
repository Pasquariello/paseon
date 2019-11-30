import Layout from '../components/MyLayout';
import { useState, useEffect } from "react";


const Pricing = props => {
  const [stripe, setStripe] = useState(null);

  useEffect(
    () => setStripe(window.Stripe(process.env.STRIPE_PUBLISHABLE_KEY)),
    []
  );

  const goToCheckout = () => {
    stripe
      .redirectToCheckout({
        sessionId: props.sessionId
      })
      .then(function(result) {
        console.log(result.error.message);
      });
  };

  return (
    <>
      <Layout>
    <div className="container">

    <div style={{textAlign: 'center', padding: '150px 0 75px 0', width: '70%', marginLeft: '15%'}}>
    <h1 className="display-4">Get The Most Out of Your Forms</h1>
    <p className="lead">Lorem ipsum dolor sit amet, mel te prima assentior suscipiantur, et sumo ridens commodo nec. Vel no solet animal scaevola, et discere singulis aliquando vix, mentitum postulant constituam ei cum.</p>
    </div>

      <div className="card-deck mb-3 text-center">
        <div className="card mb-4 box-shadow">
          <div className="card-header">
            <h4 className="my-0 font-weight-normal">Basic</h4>
          </div>
          <div className="card-body">
            <h1 className="card-title pricing-card-title">$15 <small className="text-muted">/ mo</small></h1>
            <ul className="list-unstyled mt-3 mb-4">
              <li>10 users included</li>
              <li>2 GB of storage</li>
              <li>Email support</li>
              <li>Help center access</li>
            </ul>
            <button 
              type="button" 
              className="btn btn-lg btn-block btn-outline-primary"
              onClick={goToCheckout}
              >Get Started
            </button>
          </div>
        </div>
        <div className="card mb-4 box-shadow">
          <div className="card-header">
            <h4 className="my-0 font-weight-normal">Pro</h4>
          </div>
          <div className="card-body">
            <h1 className="card-title pricing-card-title">$40 <small className="text-muted">/ mo</small></h1>
            <ul className="list-unstyled mt-3 mb-4">
              <li>20 users included</li>
              <li>10 GB of storage</li>
              <li>Priority email support</li>
              <li>Help center access</li>
            </ul>
            <button 
              type="button" 
              className="btn btn-lg btn-block btn-primary"
              >Get started
            </button>
          </div>
        </div>
        <div className="card mb-4 box-shadow">
          <div className="card-header">
            <h4 className="my-0 font-weight-normal">Enterprise</h4>
          </div>
          <div className="card-body">
            <h1 className="card-title pricing-card-title">$75 <small className="text-muted">/ mo</small></h1>
            <ul className="list-unstyled mt-3 mb-4">
              <li>30 users included</li>
              <li>15 GB of storage</li>
              <li>Phone and email support</li>
              <li>Help center access</li>
            </ul>
            <button 
              type="button" 
              className="btn btn-lg btn-block btn-primary">Contact us
            </button>
          </div>
        </div>
      </div>


<div style={{marginTop: '150px'}}>

<div style={{position:"relative", textAlign: 'center', padding: '0px 150px 50px 150px'}}>
    <h1 className="display-4">Plan Breakdown</h1>
    {/* <p className="lead">Lorem ipsum dolor sit amet, mel te prima assentior suscipiantur, et sumo ridens commodo nec. Vel no solet animal scaevola, et discere singulis aliquando vix, mentitum postulant constituam ei cum.</p> */}
</div>

<table className="table">
    <thead>
        <tr>
            <th scope="col"></th>
            <th scope="col">FREE</th>
            <th scope="col">$15/Month</th>
            <th scope="col">$40/Month</th>
            <th scope="col">$75/Month</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th scope="row">Managable Forms</th>
            <td>5</td>
            <td>10</td>
            <td>20</td>
            <td>100</td>
        </tr>
        <tr>
            <th scope="row">Monthly Email Services/Submissions</th>
            <td>50</td>
            <td>100</td>
            <td>1000</td>
            <td>5000</td>
        </tr>
        {/* <tr>
            <th scope="row">File Uploads</th>
            <td></td>
            <td>2GB</td>
            <td>10GB</td>
        </tr> */}
        <tr>
            <th scope="row">Archive</th>
            <td>30 days</td>
            <td>90 days</td>
            <td>120 days</td>
            <td>356 days</td>
        </tr>
        <tr>
            <th scope="row">Shareable Templates</th>
            <td></td>
            <td></td>
            <td>x</td>
            <td>x</td>
        </tr>
        <tr>
            <th scope="row">Custom Embedable Forms</th>
            <td>x</td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
        </tr>
        <tr>
            <th scope="row">Prebuilt Forms</th>
            <td>x</td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
        </tr>
        {/* <tr>
            <th scope="row">Custom Email templates</th>
            <td>5</td>
            <td>10</td>
            <td>20</td>
        </tr> */}
        <tr>
            <th scope="row">Support</th>
            <td>Email</td>
            <td>Email</td>
            <td>Email</td>
            <td>Priority</td>
        </tr>
        <tr>
            <th scope="row">Form Building Tool</th>
            <td>x</td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
        </tr>
        <tr>
            <th scope="row">Anaytics</th>
            <td></td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
        </tr>
        <tr>
            <th scope="row">Mobile Friendly Forms</th>
            <td>x</td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
        </tr>
        <tr>
            <th scope="row">No Label Forms</th>
            <td></td>
            <td></td>
            <td></td>
            <td>x</td>
        </tr>
        <tr>
            <th scope="row">Customer Success</th>
            <td></td>
            <td></td>
            <td></td>
            <td>x</td>
        </tr>
    </tbody>
</table>
</div>
</div>
      </Layout>
    </>
  );
}

Pricing.getInitialProps = async function({ req }) {
  const res = await fetch(`http://localhost:3000/api/build-checkout`);
  const data = await res.json();

  return {
    sessionId: data.id
  };
};

export default Pricing;