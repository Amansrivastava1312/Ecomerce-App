import React from 'react'
import Layout from '../component/layout/Layout'
import { useAuth } from '../context/auth'
const HomePage = () => {
  const [auth,setAuth]=useAuth();
  return (
    <Layout title={"Best offers"}>
        <h1>Home </h1>
        <pre>{JSON.stringify(auth,null,4)}</pre>
    </Layout>
  )
}

export default HomePage
