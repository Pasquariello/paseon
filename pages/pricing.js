import Layout from '../components/MyLayout';


export default function Pricing() {
  return (
    <>
      <Layout>
    <div class="container">

    <div style={{textAlign: 'center', padding: '150px 150px 75px 150px'}}>
    <h1 className="display-4">Get The Most Out of Your Forms</h1>
    <p className="lead">Lorem ipsum dolor sit amet, mel te prima assentior suscipiantur, et sumo ridens commodo nec. Vel no solet animal scaevola, et discere singulis aliquando vix, mentitum postulant constituam ei cum.</p>
    </div>

      <div class="card-deck mb-3 text-center">
        <div class="card mb-4 box-shadow">
          <div class="card-header">
            <h4 class="my-0 font-weight-normal">Free</h4>
          </div>
          <div class="card-body">
            <h1 class="card-title pricing-card-title">$0 <small class="text-muted">/ mo</small></h1>
            <ul class="list-unstyled mt-3 mb-4">
              <li>10 users included</li>
              <li>2 GB of storage</li>
              <li>Email support</li>
              <li>Help center access</li>
            </ul>
            <button type="button" class="btn btn-lg btn-block btn-outline-primary">Sign up for free</button>
          </div>
        </div>
        <div class="card mb-4 box-shadow">
          <div class="card-header">
            <h4 class="my-0 font-weight-normal">Pro</h4>
          </div>
          <div class="card-body">
            <h1 class="card-title pricing-card-title">$10 <small class="text-muted">/ mo</small></h1>
            <ul class="list-unstyled mt-3 mb-4">
              <li>20 users included</li>
              <li>10 GB of storage</li>
              <li>Priority email support</li>
              <li>Help center access</li>
            </ul>
            <button type="button" class="btn btn-lg btn-block btn-primary">Get started</button>
          </div>
        </div>
        <div class="card mb-4 box-shadow">
          <div class="card-header">
            <h4 class="my-0 font-weight-normal">Enterprise</h4>
          </div>
          <div class="card-body">
            <h1 class="card-title pricing-card-title">$35 <small class="text-muted">/ mo</small></h1>
            <ul class="list-unstyled mt-3 mb-4">
              <li>30 users included</li>
              <li>15 GB of storage</li>
              <li>Phone and email support</li>
              <li>Help center access</li>
            </ul>
            <button type="button" class="btn btn-lg btn-block btn-primary">Contact us</button>
          </div>
        </div>
      </div>


<div style={{marginTop: '150px'}}>

<div style={{textAlign: 'center', padding: '0px 150px 50px 150px'}}>
    <h1 className="display-4">Plan Breakdown</h1>
    {/* <p className="lead">Lorem ipsum dolor sit amet, mel te prima assentior suscipiantur, et sumo ridens commodo nec. Vel no solet animal scaevola, et discere singulis aliquando vix, mentitum postulant constituam ei cum.</p> */}
</div>

<table class="table">
    <thead>
        <tr>
            <th scope="col"></th>
            <th scope="col">Free</th>
            <th scope="col">$10/Month Basic</th>
            <th scope="col">$35/Month Gold</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th scope="row">Benefit 1</th>
            <td>x</td>
            <td>x</td>
            <td>x</td>
        </tr>
        <tr>
            <th scope="row">Benefit 2</th>
            <td>x</td>
            <td>x</td>
            <td>x</td>
        </tr>
        <tr>
            <th scope="row">Benefit 3</th>
            <td></td>
            <td>x</td>
            <td>x</td>
        </tr>
        <tr>
            <th scope="row">Benefit 4</th>
            <td></td>
            <td>x</td>
            <td>x</td>
        </tr>
        <tr>
            <th scope="row">Benefit 5</th>
            <td></td>
            <td></td>
            <td>x</td>
        </tr>
        <tr>
            <th scope="row">Benefit 6</th>
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