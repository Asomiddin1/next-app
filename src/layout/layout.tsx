import Navbar from "src/components/navbar"
import { LayoutProps  } from "./layout.props"
import Footer from "src/components/footer"
import {Box} from '@mui/material'

const Layout = ({children}:LayoutProps):JSX.Element => {
  return (
    <>
     <Navbar />
     <Box height={'90vh'} >
        {children}
             <Footer />
     </Box>

    </>
  )
}

export default Layout