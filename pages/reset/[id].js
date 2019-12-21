import Layout from '../../components/MyLayout'
import fetch from 'isomorphic-unfetch';
// import ReactTable from 'react-table';
import { useState } from 'react'
import getUrl from '../../utils/getUrl';

//TODO: make a message state


function ResetForm(props) {

    const [userData, setUserData] = useState({ 
        id: props.data.id,
        password1: '',
        password2: ''
    })


    async function handleSubmit (event) {
    
        event.preventDefault();
    
    
    
        if (userData.password1 !== userData.password2){
          console.log('no match')
          
          setUserData(
            Object.assign({}, userData, {
              error: "Passwords Do Not Match"
            })
          )
    
          return;
        }
    
        setUserData(Object.assign({}, userData, { error: '' }))
        
    // NEEDS WORK
        let url = `${getUrl}//account/reset_password`
        // return
        try {
    
          const response = await fetch(url, {
            
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userData)
      }).then(
        function(response) {
          if (response.status !== 200) {
              let error = new Error(response.statusText)
              error.response = response
              throw error
          }

          response.json().then(function(data){
            console.log('DATA', data)
          })
        }
      )
    } catch (error) {
      console.error(
        'You have an error in your code or there are Network issues.',
        error
      )

      const { response } = error
      setUserData(
        Object.assign({}, userData, {
          error: response ? response.statusText : error.message
        })
      )
    }
  }

  function setFormValuesToState(e, state_key){
    setUserData({...userData, [state_key]: e.target.value})
  }

return (

    <Layout>
      
      <div className='login' style={{overflow: 'auto'}}>
        <form onSubmit={handleSubmit}>
        
        <div className="form-group">
            <label htmlFor="inputPassword1">Password</label>
            <input 
                onChange={(e) => setFormValuesToState(e, 'password1')}
                type="password" 
                className="form-control" 
                id="inputPassword1" 
                placeholder="Password"
                required></input>
        </div>
        <div className="form-group">
            <label htmlFor="inputPassword2">Re-Enter Password</label>
            <input
                onChange={(e) => setFormValuesToState(e, 'password2')}
                type="password" 
                className="form-control" 
                id="inputPassword2" 
                placeholder="Password"
                required></input>
        </div>

          <button type='submit'>Reset Password</button>

          {userData.error && <p className='error'>Error: {userData.error}</p>}
        </form>
          
    


      </div>
      <style jsx>{`
        .login {
          max-width: 340px;
          margin: 0 auto;
          padding: 1rem;
          border: 1px solid #ccc;
          border-radius: 4px;
        }
        form {
          display: flex;
          flex-flow: column;
        }
        label {
          font-weight: 600;
        }
        input {
          padding: 8px;
          margin: 0.3rem 0 1rem;
          border: 1px solid #ccc;
          border-radius: 4px;
        }
        .error {
          margin: 0.5rem 0 0;
          color: brown;
        }
      `}</style>
    </Layout>
);
}

ResetForm.getInitialProps = async function(context, props) {
    const {id} = context.query;
  // this will need to be a req to DB
  const res = await fetch(`http://localhost:3001/account/get_user_acct/${id}`);
  const data = await res.json();

    return {data}
    // TODO 
    // table columns need to be form fields mapped to columns - make editable?
};

export default ResetForm;