import Layout from '../../components/LayoutApp';
import fetch from 'isomorphic-unfetch';
import ReactTable from 'react-table';
import moment from 'moment';

function Campaign_Analytics(props) {


return (

  <Layout>
      HELLO
  </Layout>
);
}

Campaign_Analytics.getInitialProps = async function(context, props) {
    const {id} = context.query;
  
  // this will need to be a req to DB
    const res = await fetch(`http://localhost:3001/campaign/get_campaign_details/${id}`);
    const data = await res.json();

    return {data}
};

export default Campaign_Analytics;