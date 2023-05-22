import Head from 'next/head'

import Layout from 'src/layout/layout'
import Hero from 'src/components/hero/hero'


const IndexPage = () => {
  return (
   <Layout> 
      <Head>
      <title>Next App</title>
    </Head>
    <Hero />
    </Layout>
  )
}

export default IndexPage