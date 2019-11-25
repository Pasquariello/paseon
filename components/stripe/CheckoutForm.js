import React, {Component} from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.state = {complete: false};
    this.submit = this.submit.bind(this);

  }

  async submit(ev) {
    // User clicked submit
        let {token} = await this.props.stripe.createToken({name: "Name"});
  
        //http://localhost:3001/campaign/new_campaign'
        
        let response = await fetch("http://localhost:3001/payment/charge", {
          method: "POST",
          headers: {"Content-Type": "text/plain"},
          body: token.id
        });
      
        if (response.ok) {
            console.log("Purchase Complete!");
            this.setState({complete: true})
        }
  }

  render() {
    if (this.state.complete) return <h1>Purchase Complete</h1>;

    return (
      <div className="checkout">
        <p>Would you like to complete the purchase?</p>
        <CardElement />
        <button onClick={this.submit}>Purchase</button>
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);