import { Box, Typography, Button, Divider ,Avatar } from '@mui/material'
import { Fragment } from 'react'
import { navItems } from 'src/config/constants'
import Image from 'next/image';
import { format } from 'date-fns';

const Sidebar = () => {
   return (
      <Box width={{xs:'100%' , md:'30%'}} >
         <Box position={'sticky'} top={'100px'}  sx={{transition:'all .3s ease'}}>
         <Box padding={'20px'} border={'1px solid gray'} marginTop={'20px'} borderRadius={'8px'}>
            <Typography>Latest blog</Typography>
            <Box sx={{display:'flex' , flexDirection:'column' , marginTop:'20px'} }>
               {data.map(c =>(
                  <Fragment key={c.title}>
                     <Box sx={{display:'flex' , gap:'20px' , alignItems:'center'}}>
                      <Image src={c.image} alt={c.title} width={100} height={100} 
                      style={{objectFit:'cover' , borderRadius:'8px'}}/>
                      <Box>
                        <Typography sx={{color:'#fff'}} variant='body1'>{c.title}</Typography>
                        <Box sx={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
									<Avatar alt={c.author.name} src={c.author.image} />
									<Box>
										<Typography variant='body2'>{c.author.name}</Typography>
										<Box>
											{format(new Date(c.createdAt), 'dd MMM, yyyy')}
										</Box>
									</Box>
								</Box>
                      </Box>
                     </Box>
                    <Divider sx={{marginBottom:'20px'}}/>
                  </Fragment>
               ))}
            </Box>
         </Box>

         <Box sx={{ border: '1px solid gray', padding: '20px', borderRadius: '10px', marginTop: '20px' }}>
            <Typography variant='h5' sx={{ display: 'flex', flexDirection: 'column', marginTop: '20px' }}>Category</Typography>
            {navItems.map((c) => (
               <Fragment key={c.route}>
                  <Button sx={{ display: 'block' }}>{c.label}</Button>
                  <Divider />
               </Fragment>
            ))}
        
         </Box>
         </Box>
      </Box>
   )
}

export default Sidebar

const data = [
	{
		image: 'https://media.graphassets.com/MxJZhmooRRuudoErkQ38',
		title: 'Technical SEO with Hygraph',
		exerpt: 'Get started with your SEO implementation when using a Headless CMS',
        createdAt:2023,
        description:'hello okay',
		author: {
			name: 'Asomiddin',
			image: 'https://media.graphassets.com/DkfNqQNGRz2F4UFntKQx',
		},
	},
	{
		image: 'https://media.graphassets.com/bh3K2NNtTHCN260Xfq9h',
		title: 'Union Types and Sortable Relations with Hygraph',
		exerpt: 'Learn more about Polymorphic Relations and Sortable Relations with Hygraph',
        createdAt:10,
        description:'hello okay',
		author: {
			name: 'Samar Badriddinov',
			image: 'https://media.graphassets.com/DkfNqQNGRz2F4UFntKQx',
		},
	},
];
