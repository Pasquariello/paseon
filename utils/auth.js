import { useEffect } from 'react'
import Router from 'next/router'
import nextCookie from 'next-cookies'
import cookie from 'js-cookie'
import { compose } from 'redux'
// import { login_action } from '../redux/actions/auth'
import { useDispatch } from 'react-redux'


export const login = ({ token }) => {

  console.log('in login', token)
  cookie.set('token', token, { expires: 36000 })

  Router.push('/dashboard')
}



export const getUserData  = async (ctx) =>  {
  // let dispatch = useDispatch()
  const { userId } = nextCookie(ctx)
  let url = 'http://localhost:3001/account/get_acct_details'
  // let url = 'http://localhost:3001/account/reset_password'
  try {

    const response = await fetch(url, {
      
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({id: userId})
      
    }).then(
      function(response) {

        if (response.status !== 200) {
            let error = new Error(response.statusText)
            error.response = response
            throw error
        }

        response.json().then(function(data){
          console.log('DATA FROM GET USER', data)

          const { dispatch } = ctx.reduxStore;

          dispatch({
            type: 'USER_LOADED',
            payload: data
          });

        })
      }
    )
  } catch (error) {
    console.error('You have an error in your code or there are Network issues.',error)

    const { response } = error
   
  }
}





export const auth = ctx => {
 
  const { token, userId } = nextCookie(ctx)

  if (!ctx.reduxStore.getState().user.user){
    console.log('no user')
    getUserData(ctx)
  } else {
    console.log(ctx.reduxStore.getState().user.user)
  }


  console.log('tay token', token)
  console.log('tay token id', userId)

  // //// NEW
  // let dispatch = useDispatch() 
  // if (ctx.reduxStore.getState().auth.user){
  //   console.log('IN IF')
  //     idTest = ctx.reduxStore.getState().auth.user.id
  //   } else {
  //     console.log('IN ELSE')

  //     dispatch(loadUser(userId))
  //   }
  // ///END NEW
  

  /*
   * If `ctx.req` is available it means we are on the server.
   * Additionally if there's no token it means the user is not logged in.
   */
  if (ctx.req && !token) {
    ctx.res.writeHead(302, { Location: '/login' })
    ctx.res.end()
  }

  // We already checked for server. This should only happen on client.
  if (!token) {
    console.log('!token')
    Router.push('/login')
  }

  console.log('IN AUTH', userId)
  return userId;
}

export const logout = () => {
  console.log('logOut')
  cookie.remove('token')
  // to support logging out from all windows
  window.localStorage.setItem('logout', Date.now())
  Router.push('/login')
}

export const withAuthSync = WrappedComponent => {
  const Wrapper = props => {
    const syncLogout = event => {
      if (event.key === 'logout') {
        console.log('logged out from storage!')
        Router.push('/login')
      }
    }

    useEffect(() => {
      window.addEventListener('storage', syncLogout)

      return () => {
        window.removeEventListener('storage', syncLogout)
        window.localStorage.removeItem('logout')
      }
    }, [null])

    return <WrappedComponent {...props} />
  }

  Wrapper.getInitialProps = async ctx => {
    const token = auth(ctx)

    const componentProps =
      WrappedComponent.getInitialProps &&
      (await WrappedComponent.getInitialProps(ctx))

    return { ...componentProps, token }
  }

  return Wrapper
}