import React from 'react'
import Router from 'next/router'
import fetch from 'isomorphic-unfetch'
import nextCookie from 'next-cookies'
import Layout from '../components/MyLayout'
import { withAuthSync } from '../utils/auth'
import getHost from '../utils/get-host'

const Profile = props => {
  // const { name, login, bio, avatarUrl } = props.data

  return (
    <Layout>
    
    <div>
      <h3>Tools:</h3>
      <hr></hr>
      <ul>
        <li>Form Builder</li>
        <li>Hash Email</li>
        <li>Archived Emails</li>
        <li>My Forms</li>
      </ul>
    </div>



    </Layout>
  )
}

Profile.getInitialProps = async ctx => {
  const { token } = nextCookie(ctx)
  const apiUrl = getHost(ctx.req) + '/profile'
  const redirectOnError = () => {
    typeof window !== 'undefined'
      ? Router.push('/login')
      : ctx.res.writeHead(302, { Location: '/login' }).end()
  }

  try {
    const response = await fetch(apiUrl, {
      credentials: 'include',
      headers: {
        Authorization: JSON.stringify({ token })
      }
    })

    if (response.ok) {
      console.log('res good', response)
    } else {
      // https://github.com/developit/unfetch#caveats
      return await redirectOnError()
    }
  } catch (error) {
    console.log('error', error)
    // Implementation or Network error
    return redirectOnError()
  }
}

export default withAuthSync(Profile)