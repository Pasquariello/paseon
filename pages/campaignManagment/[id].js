import Layout from '../../components/LayoutApp';
import fetch from 'isomorphic-unfetch';
import ReactTable from 'react-table';
import moment from 'moment';
import CampaignLink from '../../components/CampaingLink';
import Link from 'next/link';

const Campaign = props => (
  <Layout>
    <h3>{props.dataOne[0].name}</h3>
    {/* <h1>{props.show.name}</h1>
    <p>{props.show.summary.replace(/<[/]?p>/g, '')}</p>
    <img src={props.show.image.medium} /> */}


    <ReactTable
        data={props.dataOne}
        columns={props.columns}
    />
  </Layout>
);

Campaign.getInitialProps = async function(context) {
  const {id} = context.query;
  console.log('id', id)
  // this will need to be a req to DB
  // const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  // const show = await res.json();
 // console.log(`Fetched show: ${show.name}`);

  // return { show };

  ///START grid faux data
  const data = [
    {
        id: 1,
        name: 'Elevation Companies Contact Form',
        recipient_Email: 'taylorpasq@gmail.com',
        recipient_Email_hashed: hashCode('Taylorpasq@gmail.com'),
        date_created: moment().format('LLL'),
        url: 'elevationcompanies.com',
        form_type: {
            type : 'basic_contact',
            display : 'Basic Contact',
        }
    },
    {
        id: 2,
        name: 'Maverick Contact Form',
        recipient_Email: 'maverick@gmail.com',
        recipient_Email_hashed: hashCode('maverick@gmail.com',),
        date_created: moment().format('LLL'),
        url: 'maverickkitchens.com',
        form_type: {
            type : 'basic_contact',
            display : 'Basic Contact'
        }
    },
    {
        id: 3,
        name: 'BitterSweet RSVP Form',
        recipient_Email: 'dine@bittersweet.com',
        recipient_Email_hashed: hashCode('dine@bittersweet.com',),
        date_created: moment().format('LLL'),
        url: 'bittersweetdenver.com/',
        form_type: {
            type : 'basic_RSVP',
            display : 'Basic RSVP'
        }
    }
]


const columns = [
    {
        id: 'name',
        Header: 'Name',
        accessor: 'name',
        Cell: props => <CampaignLink id={props.original.id} title={props.value}/>
    }, 
    {
        Header: 'Recipient Email',
        accessor: 'recipient_Email',
        Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
    }, 
    {
        Header: 'Email Hash',
        accessor: 'recipient_Email_hashed'
    },
    {
        id: 'form_type', // Required because our accessor is not a string
        Header: 'Form Type',
        accessor: d => d.form_type.display, // Custom value accessors!
    },
    {
        Header: 'URL',
        accessor: 'url',
        Cell: props =>  <Link prefetch={false} href={`http://${props.value}`}><a target="_blank">{`http://${props.value}`}</a></Link> // Custom cell components!

    },
    {
        Header: 'Date Created',
        accessor: 'date_created',
    }
]

function hashCode(s) {
  return s.split("").reduce(function(a,b){a=((a<<5)-a)+b.charCodeAt(0);return a&a},0);              
}
///END grid faux data


// TODO 
// rename data one! 
// table columns need to be form fields mapped to columns - make editable?
// export button
let  dataOne = data.filter(data => data.id == id)
console.log('taylor', dataOne);
  return { id, dataOne, columns };

};

export default Campaign;