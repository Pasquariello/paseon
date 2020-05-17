import Layout from '../../components/LayoutApp';
import fetch from 'isomorphic-unfetch';
import moment from 'moment';
import TimeBarChart from '../../components/Charts/timeBarChart';

import getUrl from '../../utils/getUrl';
import {
	useTable,
	useGroupBy,
	useFilters,
	useSortBy,
	useExpanded,
	usePagination,
} from 'react-table'

function Campaign_Analytics(props) {


	return (

		<Layout>
			<TimeBarChart/>
		</Layout>
	);
}

Campaign_Analytics.getInitialProps = async function(context, props) {
	const {id} = context.query;
  
	// this will need to be a req to DB
	const res = await fetch(`${getUrl}/campaign/get_campaign_details/${id}`); // needs body to send user_id
	const data = await res.json();
	console.log('DUDE')

	console.log('DATA', data)
	return {data}
};

export default Campaign_Analytics;