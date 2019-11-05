import Layout from '../../components/LayoutApp';
import fetch from 'isomorphic-unfetch';
import ReactTable from 'react-table';
import moment from 'moment';
import CampaignLink from '../../components/CampaignLink';
import Link from 'next/link';

export default function Campaign(props) {

    const renderTable = (fields) => {

        console.log('in columns', fields)
        // TODO: rename? name columns and make a stateful value? 
console.log('data_schema', props.data.data_schema)
console.log('form_data', props.data.form_data)


let build = []
let myObj = [{
    name: 'taylor',
    email: 'tay@pasq.net',
    subject: 'looking to talk',
    body: 'hello', 
}]

// const columns = props.data.data_schema[0].fields.map((key, id)=>{
//     console.log('kkkkkkk', key)
//     build.push(
//         {
//             id: `${id}`,
//             Header: key.label,
//             accessor: d => d.value
//             }
//     )
//     // return {
//     //   Header: key,
//     //   accessor: key
//     // }
//   })


  let test = props.data.data_schema[0].fields.map((key, id)=>{


      return {
          [key.name]: props.data.form_data.filter(entry => entry.field == key.name ? entry.value : ''  )
      }
    // set.filter(function (entry) { return entry.color === "green"; });
    // return props.data.form_data.map(elem => {

    //     return {
            
    //         [
    //     }
    // })
  })

  console.log('test', test);

//   const columns = test.map((key, id)=>{
//     console.log('kkkkkkk', key)
//     build.push(
//         {
//             id: `${id}`,
//             Header: key,
//             accessor: d => {console.log(d)}
//             }
//     )
//     // return {
//     //   Header: key,
//     //   accessor: key
//     // }
//   })


const columns = Object.keys(test).map((key, id)=>{
    console.log(key)
    build.push(
        {
            id: 'idk',
            Header: 'test',
            accessor: key
            }
    )
    // return {
    //   Header: key,
    //   accessor: key
    // }
  })
//   var results = set.filter(function (entry) { return entry.color === "green"; });


// let columns2 = props.data.form_data.map(item =>{
//     props.data.data_schema[0].fields.map(elem =>{
//         console.log('elem', elem)
//         console.log('item', item)

//         return [
//             {
//                 id: item.id,
//                 Header: elem.label,
//                 accessor: d => d.value
//             }
//         ]
//     })
 
// })

// props.data.form_data.map(obj => {
//     if obj.submission_id ==
// })



//   console.log('selectedUser', selectedUser)

// let myData = props.data.form_data
// let columns = [
//     {
//         Header: 'Name',
//         accessor: 'name'
//     },
//     {
//         Header: 'Subject',
//         accessor: 'subject'
//     },
//     {
//         Header: 'Email',
//         accessor: 'email'
//     },
//     {
//         Header: 'Body',
//         accessor: 'body'
//     },
// ] 
// let b = []
// let myColumns = props.data.form_data.map((elem, index) => {
//     b.push( {
//             id: index,
//             Header: elem.field,
//             accessor: 'value'
//         })
    
// })

// console.log(myColumns)


// Object.keys()
// let myArray =  props.data.data_schema[0].fields.map((elem, index) => {
//     return props.data.form_data.map((item, index) => {
//     let val = item.label
//     console.log('HERE', val)
//     return {
//        [val] : item.value,
//        title: val
//     }
// })
// })


// let myCols = myArray.map(elem => {
//     console.log('ELEM', elem.key)
//     return {
//         Header: elem.title,
//         accessor: elem.title
//     }
// })
// console.log('MY COLS', myCols)

// console.log('MY ARRAY', myArray)


        //TODO: turn this into its own function that takes in columns? 
        return (
            <>
                <p>Visual representation of data collected with your new campaign.</p>
                <ReactTable
                columns={build}
                data={test}
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
    {props.data ? renderTable(props.data.data_schema[0].fields) : null}


    {/* <ReactTable
        data={props.dataOne}
        columns={props.columns}
    /> */}
  </Layout>
);
}

Campaign.getInitialProps = async function(context, props) {
    console.log('um hello!')
    const {id} = context.query;
    console.log('my props', props)
    console.log('id', id)
    console.log(context)
  // this will need to be a req to DB
    const res = await fetch(`http://localhost:3001/campaign/get_campaigns/${id}`);
    const data = await res.json();
    
    console.log('data!', data);
    
    // let  dataOne = data.filter(data => data.id == id)
    // return { id, dataOne, columns };
    return {data}

 // console.log(`Fetched show: ${show.name}`);

  // return { show };

  ///START grid faux data
//   const data = [
//     {
//         id: 1,
//         name: 'Elevation Companies Contact Form',
//         recipient_Email: 'taylorpasq@gmail.com',
//         recipient_Email_hashed: hashCode('Taylorpasq@gmail.com'),
//         date_created: moment().format('LLL'),
//         url: 'elevationcompanies.com',
//         form_type: {
//             type : 'basic_contact',
//             display : 'Basic Contact',
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
//   return s.split("").reduce(function(a,b){a=((a<<5)-a)+b.charCodeAt(0);return a&a},0);              
// }
///END grid faux data


// TODO 
// rename data one! 
// table columns need to be form fields mapped to columns - make editable?
// export button


};