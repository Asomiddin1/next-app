import {
	AppBar,
	Box,
	Button,
	Divider,
	Drawer,
	IconButton,
	List,
	ListItem,
	ListItemButton,
	ListItemText,
	Toolbar,
	Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { navItems } from 'src/config/constants';
import CloseIcon from '@mui/icons-material/Close';
import AdjustIcon from '@mui/icons-material/Adjust';
import { useRouter } from 'next/router';
import Image from 'next/image';

interface Props {
	window?: () => Window;
}

const Navbar = ({ window }: Props) => {
	const [mobileOpen, setMobileOpen] = useState(false);
	const router = useRouter();

	const handleDrawerToggle = () => {
		setMobileOpen(prevState => !prevState);
	};

	const container = window !== undefined ? () => window().document.body : undefined;

	const drawer = (
		<Box sx={{ textAlign: 'center' }}>
			<Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingX: '20px' }}>
				<Box sx={{ my: 1, display: 'flex', alignItems: 'center', gap: '5px' }}>
				<img width={200} src={'https://o.remove.bg/downloads/7b60e373-e9ce-4619-8175-0b8db0c0d6fc/360_F_515137824_RWOnZxY8GxrD4YHHJ62PuNdMm210T2Ep-removebg-preview.png'} alt="logo" />
				</Box>
				<CloseIcon onClick={handleDrawerToggle} sx={{ cursor: 'pointer' }} />
			</Box>
			<Divider />
			<List>
				{navItems.map(item => (
					<ListItem key={item.route} disablePadding>
						<ListItemButton onClick={() => router.push(item.route)} sx={{ textAlign: 'center' }}>
							<ListItemText primary={item.label} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Box>
	);

	return (
		<Box height={'9vh'} sx={{ display: 'flex' }}>
			<AppBar sx={{ backgroundColor: '#141414', height: '9vh' }} component='nav'>
				<Toolbar>
					<IconButton
						color='inherit'
						aria-label='open drawer'
						edge='start'
						onClick={handleDrawerToggle}
						sx={{ mr: 2, display: { sm: 'none' } }}
					>
						<MenuIcon />
					</IconButton>
					<Box
						onClick={() => router.push('/')}
						sx={{ my: 2, alignItems: 'center', gap: '5px', flexGrow: 1, display: 'flex', cursor: 'pointer' }}
					>
					   <img width={200} src={'https://o.remove.bg/downloads/7b60e373-e9ce-4619-8175-0b8db0c0d6fc/360_F_515137824_RWOnZxY8GxrD4YHHJ62PuNdMm210T2Ep-removebg-preview.png'} alt="logo" />
					</Box>

					<Box sx={{ display: { xs: 'none', sm: 'block' } }}>
						{navItems.map(item => (
							<Button onClick={() => router.push(item.route)} key={item.route} sx={{ color: '#fff' }}>
								{item.label}
							</Button>
						))}
					</Box>
				</Toolbar>
			</AppBar>
			<Box component='nav'>
				<Drawer
					container={container}
					variant='temporary'
					open={mobileOpen}
					onClose={handleDrawerToggle}
					ModalProps={{
						keepMounted: true,
					}}
					sx={{
						display: { xs: 'block', sm: 'none' },
						'& .MuiDrawer-paper': { boxSizing: 'border-box', width: `100%` },
					}}
				>
					{drawer}
				</Drawer>
			</Box>
		</Box>
	);
};

export default Navbar;