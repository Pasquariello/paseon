import { useEffect } from 'react'
import Router from 'next/router'
import nextCookie from 'next-cookies'
import cookie from 'js-cookie'
import { compose } from 'redux'
// import { login_action } from '../redux/actions/auth'

export const login = ({ token }) => {
  console.log('old')
  //   dispatch({
  //   type: 'LOGIN',
  //   current_user: 2
  //   //light: typeof window === 'object',
  //   //lastUpdate: Date.now(),
  // })
  
  
  console.log('in login', token)
  cookie.set('token', token, { expires: 36000 })

  Router.push('/dashboard')
}

export const auth = ctx => {
// TODO reset store!!!!
  console.log('in auth')
  // const name = ctx.cookie.get('name')
  // console.log('tay name', name)

  const { token, userId } = nextCookie(ctx)
  console.log('tay token', token)
  console.log('tay token id', userId)

  /*
   * If `ctx.req` is available it means we are on the server.
   * Additionally if there's no token it means the user is not logged in.
   */
  if (ctx.req && !token) {
    console.log('IFFFFFF ')
    ctx.res.writeHead(302, { Location: '/login' })
    ctx.res.end()
  }

  // We already checked for server. This should only happen on client.
  if (!token) {
    console.log('!token')
    Router.push('/login')
  }

  return userId
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