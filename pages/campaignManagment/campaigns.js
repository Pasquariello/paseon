import Layout from '../../components/MyLayout';
import Link from 'next/link';
import LayoutApp from '../../components/LayoutApp'
import QuickAnalytics from '../../components/QuickAnalytics';
import ReactTable from 'react-table';
import moment from 'moment';
import 'moment-timezone';
import CampaignLink from '../../components/CampaignLink';
import fetch from 'isomorphic-unfetch';


export default function Campaigns(props) {
    let quickAnalyticsData = [
        {
          title: 'Contact Form',
  
        },
        {
          title: 'Sign Up Form',
        },
        {
          title: 'RSVP From',
        },
    ] 
    

    const data = props.CampaignList;
   

    const renderTable = () => {
    
        const columns = [
                {
                    id: 'name',
                    Header: 'Name',
                    accessor: 'campaign_name',
                    Cell: props => <CampaignLink id={props.original.id} title={props.value}/>

                },
                {
                    id: 'date_created',
                    Header: 'Date Created',
                    accessor: 'date_created',
                    Cell: props => moment(props.value).format('LLL')

                },
        ]
        
        //TODO: turn this into its own function that takes in columns? 
        return (
            <>
            <p>Visual representation of data collected with your new campaign.</p>
            <ReactTable
            data={props.CampaignList}
            columns={columns}
            /> 
            </>
        )
    }
    ///START grid faux data
    // const data = [
    //     {
    //         id: 1,
    //         name: 'Elevation Companies Contact Form',
    //         recipient_Email: 'taylorpasq@gmail.com',
    //         recipient_Email_hashed: hashCode('Taylorpasq@gmail.com'),
    //         date_created: moment().format('LLL'),
    //         url: 'elevationcompanies.com',
    //         form_type: {
    //             type : 'basic_contact',
    //             display : 'Basic Contact'
    //         }
    //     },
    //     {
    //         id: 2,
    //         name: 'Maverick Contact Form',
    //         recipient_Email: 'maverick@gmail.com',
    //         recipient_Email_hashed: hashCode('maverick@gmail.com',),
    //         date_created: moment().format('LLL'),
    //         url: 'maverickkitchens.com',
    //         form_type: {
    //             type : 'basic_contact',
    //             display : 'Basic Contact'
    //         }
    //     },
    //     {
    //         id: 3,
    //         name: 'BitterSweet RSVP Form',
    //         recipient_Email: 'dine@bittersweet.com',
    //         recipient_Email_hashed: hashCode('dine@bittersweet.com',),
    //         date_created: moment().format('LLL'),
    //         url: 'bittersweetdenver.com/',
    //         form_type: {
    //             type : 'basic_RSVP',
    //             display : 'Basic RSVP'
    //         }
    //     }
    // ]


    // const columns = [
    //     {
    //         id: 'name',
    //         Header: 'Name',
    //         accessor: 'name',
    //         Cell: props => <CampaignLink id={props.original.id} title={props.value}/>
    //     }, 
    //     {
    //         Header: 'Recipient Email',
    //         accessor: 'recipient_Email',
    //         Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
    //     }, 
    //     {
    //         Header: 'Email Hash',
    //         accessor: 'recipient_Email_hashed'
    //     },
    //     {
    //         id: 'form_type', // Required because our accessor is not a string
    //         Header: 'Form Type',
    //         accessor: d => d.form_type.display, // Custom value accessors!
    //     },
    //     {
    //         Header: 'URL',
    //         accessor: 'url',
    //         Cell: props =>  <Link prefetch={false} href={`http://${props.value}`}><a target="_blank">{`http://${props.value}`}</a></Link> // Custom cell components!

    //     },
    //     {
    //         Header: 'Date Created',
    //         accessor: 'date_created',
    //     }
    // ]

    // function hashCode(s) {
    //     return s.split("").reduce(function(a,b){a=((a<<5)-a)+b.charCodeAt(0);return a&a},0);              
    // }
    ///END grid faux data

    return (
        <LayoutApp>
            Basic Form Options:
            <QuickAnalytics
                data={quickAnalyticsData}
            />
            <div className="row" style={{marginTop: '50px', marginBottom: '150px'}}>
                <div className="col-md-6" style={{padding: '20px'}}>
                    <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: "25rem"}} src="../static/images/undraw_creative_process_q6aw.svg" alt=""></img>
                </div>
                <div className="col-md-6" style={{padding: '20px'}}>
                    <h3>Manage Your Assets</h3> 
                    <p>Lorem ipsum dolor sit amet, mel te prima assentior suscipiantur, et sumo ridens commodo nec. Vel no solet animal scaevola, et discere singulis aliquando vix, mentitum postulant constituam ei cum.</p>
                </div>
            </div>
            
            <div className="row">
            <h3>My Campaings:</h3> 
                <Link href="/campaignManagment/newCampaign">
                    <a>+ New</a>
                </Link>
            </div>
            <div style={{marginTop: '20px'}}>
            {props.CampaignList.length ? renderTable() : null}

            {/* <ReactTable
                data={data}
                columns={columns}
            /> */}
            </div>
            

 
            
        </LayoutApp>

    );
}

Campaigns.getInitialProps = async function(context) {
    console.log(
        'hello from init props'
    )
    const res = await fetch('http://localhost:3001/campaign/get_campaigns');
    const data = await res.json();
    console.log('resolved');

    console.log('I got: ',data);
  
    return {
      CampaignList: data
    };
}