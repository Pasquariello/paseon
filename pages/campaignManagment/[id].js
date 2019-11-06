import Layout from '../../components/LayoutApp';
import fetch from 'isomorphic-unfetch';
import ReactTable from 'react-table';
import moment from 'moment';
import CampaignLink from '../../components/CampaignLink';
import Link from 'next/link';

export default function Campaign(props) {

    
    const renderTable = (fields) => {

  console.log('FORM DATA', props.data.form_data)
let myArray = props.data.form_data.map(obj =>{
    return obj.field_values
})
console.log('MY ARRAY', myArray)



const columns = Object.keys(myArray[0]).map((key, i)=>{
    console.log(key.i)
    return {
      id: `${i}`,
      Header: key,
      accessor: d => d.field_values[key]
    }
  })


        //TODO: turn this into its own function that takes in columns? 
        return (
            <>
                <p>Visual representation of data collected with your new campaign.</p>
                <ReactTable
                columns={columns}
                data={props.data.form_data}
                 /> 
            </>
        )
    }


return (
  <Layout>
hello
    {/* <h3>{props.data[0].name}</h3> */}
    {/* <h1>{props.show.name}</h1>
    <p>{props.show.summary.replace(/<[/]?p>/g, '')}</p>
    <img src={props.show.image.medium} /> */}
    {props.data.form_data ? renderTable() : null}


    {/* <ReactTable
        data={props.dataOne}
        columns={props.columns}
    /> */}
  </Layout>
);
}

Campaign.getInitialProps = async function(context, props) {
    const {id} = context.query;
  
  // this will need to be a req to DB
    const res = await fetch(`http://localhost:3001/campaign/get_campaigns/${id}`);
    const data = await res.json();
    
    
    // let  dataOne = data.filter(data => data.id == id)
    // return { id, dataOne, columns };
    // return {data}


  // return { show };

  //START grid faux data
//    const mdata = [
//     {
//         id: 1,
//         name: {
//             title : 'Name',
//             value : 'Taylor',
            
//         },
//         subject: {
//             title : 'Subject',
//             value : 'a quick hello',
//         },
//         body: {
//             title : 'Body',
//             value : 'This is me saying a quick hello, I hope all is well',
//         }
//     },

    
// ]

// let cols2 = []
// let cols = mdata.map((d, index) => {
//     cols2.push({
//         id: `${index}`,
//         Header: props => {console.log(props)},
//         accessor: props => {{console.log(props)}}
//     })
// })


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
//   return s.split("").reduce(function(a,b){a=((a<<5)-a)+b.charCodeAt(0);return a&a},0);              
// }
//END grid faux data

return {data}
// TODO 
// rename data one! 
// table columns need to be form fields mapped to columns - make editable?
// export button


};