import React from 'react'
import {Link} from 'gatsby'
import Layout from '../components/layout'
import Head from "../components/head";

function AboutPage() {
  return (
    <Layout>
      <Head title="About" />
      <h1>Biography</h1>
      <h2>Front and Back developer, Using React, Node.js, MongoDb</h2>
      <p><Link to="/contact">Contact me</Link></p>
    </Layout>
  )
}

export default AboutPage
