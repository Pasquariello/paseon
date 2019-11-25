
import {Elements, StripeProvider} from 'react-stripe-elements';
import InjectedCheckoutForm from './CheckoutForm';

class Stripe extends React.Component {
    constructor() {
      super();
      this.state = {stripe: null};
    }
    componentDidMount() {
      // Create Stripe instance in componentDidMount
      // (componentDidMount only fires in browser/DOM environment)
      this.setState({stripe: window.Stripe('pk_test_TYooMQauvdEDq54NiTphI7jx')});
    }
    render() {
      return (
        <StripeProvider stripe={this.state.stripe}>
          <Elements>
            <InjectedCheckoutForm />
          </Elements>
        </StripeProvider>
      );
    }
  }

  export default Stripe