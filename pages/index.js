import Head from 'next/head'
import Layout from '../components/Layout'
import HomeComponents from '../components/Home'

export default function Home() {
  return (
    <div className="container">
      <Layout />
      <HomeComponents />
    </div>
  )
}
