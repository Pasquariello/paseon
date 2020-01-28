import { useEffect } from 'react'
import Router from 'next/router'
import nextCookie from 'next-cookies'
import cookie from 'js-cookie'
import { compose } from 'redux'
// import { login_action } from '../redux/actions/auth'
import { useDispatch } from 'react-redux'
import getUrl from './getUrl';


export const login = ({ token }) => {

  cookie.set('token', token, { expires: 36 })

  Router.push('/dashboard')
}


export const getUserData  = async (ctx) =>  {

  const { userId } = nextCookie(ctx)
  let url = `${getUrl}/account/get_acct_details`
  
  try {

    await fetch(url, {
      
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({id: userId})
      
    }).then(
      async function(response) {
        if (response.status !== 200) {
            let error = new Error(response.statusText)
            error.response = response
            throw error
        }

        await response.json().then(function(data){
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





export const auth = async ctx => {
  const { token, userId } = nextCookie(ctx)
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
    Router.push('/login')
  }

  return userId;
}

export const logout = () => {
  cookie.remove('token')
  // to support logging out from all windows
  window.localStorage.setItem('logout', Date.now())
  dispatch({
    type: 'LOGOUT',
  });
  // Router.push('/login')
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