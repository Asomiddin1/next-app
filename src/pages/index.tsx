import Head from 'next/head'

import Layout from 'src/layout/layout'
import {Box} from '@mui/material'
import Hero from 'src/components/hero/hero'
import Sidebar from 'src/components/sidbar/sidebar'
import Content from 'src/components/content/content'


const IndexPage = () => {
  return (
   <Layout> 
      <Head>
      <title>Next App</title>
    </Head>
    <Hero />

    <Box sx={{display:'flex' , flexDirection:{xs:'column' , md:'row'}, gap:'20px' , padding:'10px'} }>
       <Sidebar />
       <Content />
    </Box>
    </Layout>
  )
}

export default IndexPage