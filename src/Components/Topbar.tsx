import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import { NavLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import './Topbar.css';

interface cartpagedata{
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating:{rate: number;count:number};
  }

interface cartcountdetails{
    cartcount:cartpagedata[]
}

export default function Topbar(props:cartcountdetails) {
  return (
    <Box>
        <AppBar>
            <Toolbar>
                <IconButton>
                   <MenuIcon/>
                </IconButton>
                <Typography>
                    My Brand Name {props.cartcount.length}
                </Typography>
                <Box sx={{flexGrow:1,display:'flex',justifyContent:'end'}}>
                    <ul className="Topbarmenu">
                        <li><NavLink to="/" className={({ isActive }) => (isActive ? "Linking active" : "Linking")}>Home</NavLink></li>
                        <li><NavLink to="/about" className={({ isActive }) => (isActive ? "Linking active" : "Linking")}>About</NavLink></li>
                        <li><NavLink to="/contact" className={({ isActive }) => (isActive ? "Linking active" : "Linking")}>Contact</NavLink></li>
                        <li><NavLink to="/service" className={({ isActive }) => (isActive ? "Linking active" : "Linking")}>Service</NavLink></li>
                        <li><NavLink to="/cart" className={({ isActive }) => (isActive ? "Linking active" : "Linking")}>Cart</NavLink></li>
                    </ul>
                </Box>
            </Toolbar>
        </AppBar>
    </Box>
  )
}
