import Layout from '../components/MyLayout';
import Link from 'next/link';
import LayoutApp from '../components/LayoutApp'
import QuickAnalytics from '../components/QuickAnalytics';
import ReactTable from 'react-table';
import moment from 'moment';



export default function ManagedForms() {
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

    ///START grid faux data
    const data = [
        {
            name: 'Elevation Companies Contact Form',
            recipient_Email: 'taylorpasq@gmail.com',
            recipient_Email_hashed: hashCode('Taylorpasq@gmail.com'),
            date_created: moment().format('LLL'),
            form_type: {
                type : 'basic_contact',
                display : 'Basic Contact'
            }
        },
        {
            name: 'Maverick Contact Form',
            recipient_Email: 'maverick@gmail.com',
            recipient_Email_hashed: hashCode('maverick@gmail.com',),
            date_created: moment().format('LLL'),
            form_type: {
                type : 'basic_contact',
                display : 'Basic Contact'
            }
        },
        {
            name: 'BitterSweet RSVP Form',
            recipient_Email: 'dine@bittersweet.com',
            recipient_Email_hashed: hashCode('dine@bittersweet.com',),
            date_created: moment().format('LLL'),
            form_type: {
                type : 'basic_RSVP',
                display : 'Basic RSVP'
            }
        }
    ]


     
    const columns = [
        {
            Header: 'Name',
            accessor: 'name' // String-based value accessors!
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
            Header: 'Date Created',
            accessor: 'date_created',
        }
    ]
    ///END grid faux data

   function hashCode(s) {
        return s.split("").reduce(function(a,b){a=((a<<5)-a)+b.charCodeAt(0);return a&a},0);              
      }
    
      console.log(hashCode('taylor'))

    return (
        <LayoutApp>
            Basic Form Options:
            <QuickAnalytics
                data={quickAnalyticsData}
            />
            <div className="row" style={{marginTop: '50px'}}>
                <div className="col-md-6" style={{padding: '20px'}}>
                    <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: "25rem"}} src="../static/images/undraw_creative_process_q6aw.svg" alt=""></img>
                </div>
                <div className="col-md-6" style={{padding: '20px'}}>
                    <h3>Manage Your Assets</h3> 
                    <p>Lorem ipsum dolor sit amet, mel te prima assentior suscipiantur, et sumo ridens commodo nec. Vel no solet animal scaevola, et discere singulis aliquando vix, mentitum postulant constituam ei cum.</p>
                </div>
            </div>
            My Custom Forms:

            <ReactTable
                data={data}
                columns={columns}
            />
            

 
            
        </LayoutApp>

    )

}