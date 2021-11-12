import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';
import PaymentsIcon from '@mui/icons-material/Payments';
import ReviewsIcon from '@mui/icons-material/Reviews';
import AddIcon from '@mui/icons-material/Add';
import ListAltIcon from '@mui/icons-material/ListAlt';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import AddReactionIcon from '@mui/icons-material/AddReaction'; 
import DashboardIcon from '@mui/icons-material/Dashboard';
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import { Routes, Route } from "react-router-dom";
import Pay from '../UserDashboardPages/Pay/Pay';
import MyOrders from '../UserDashboardPages/MyOrders/MyOrders';
import Review from '../UserDashboardPages/Review/Review';
import ManageAllOrders from '../AdminDashboardPages/ManageAllOrders/ManageAllOrders';
import AddProduct from '../AdminDashboardPages/AddProduct/AddProduct';
import MakeAdmin from '../AdminDashboardPages/MakeAdmin/MakeAdmin';
import ManageProducts from '../AdminDashboardPages/ManageProducts/ManageProducts';
import { Button } from '@mui/material';
import useAuth from '../../../hooks/useAuth';
import DashboardHome from '../DashboardHome/DashboardHome';


const drawerWidth = 240;

function DashboardDrawer(props) {
  const {isAdmin, logOut} = useAuth();
  console.log(isAdmin);
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // -------------
  const handleActiveNav = ({isActive}) =>{
    return {
      color : isActive ? "blue" : "black",
      textDecoration:"none",
      display:"flex", 
      alignItems:"center"
    }
  }
  // -------------

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      {
        !isAdmin ? <List>
              <ListItem><NavLink to={`/home`} style={handleActiveNav}><HomeIcon sx={{mr:2}} color="secondary"/>Go Home</NavLink></ListItem>
              <ListItem><NavLink to={`pay`} style={handleActiveNav}><PaymentsIcon sx={{mr:2}} color="secondary"/>Pay</NavLink></ListItem>
              <ListItem><NavLink to={`my-orders`} style={handleActiveNav}><ListAltIcon sx={{mr:2}} color="secondary"/>My Orders</NavLink></ListItem>
              <ListItem><NavLink to="review" style={handleActiveNav}><ReviewsIcon sx={{mr:2}} color="secondary"/>Review</NavLink></ListItem>
              <ListItem><Button onClick={logOut} sx={{p:0}}><LogoutIcon sx={{mr:2}} color="secondary"/>Logout</Button></ListItem>
            </List>
            : <List>
              <ListItem><NavLink to={`/home`} style={handleActiveNav}><HomeIcon sx={{mr:2}} color="secondary"/>Go Home</NavLink></ListItem>
              <ListItem><NavLink to="manage-orders" style={handleActiveNav}><ManageAccountsIcon sx={{mr:2}} color="secondary"/>Manage All Orders</NavLink></ListItem>
              <ListItem><NavLink to="add-products" style={handleActiveNav}><AddIcon sx={{mr:2}} color="secondary"/>Add a Product</NavLink></ListItem>
              <ListItem><NavLink to="make-admin" style={handleActiveNav}><AddReactionIcon sx={{mr:2}} color="secondary"/>Make Admin</NavLink></ListItem>
              <ListItem><NavLink to="manage-products" style={handleActiveNav}><DashboardIcon sx={{mr:2}} color="secondary"/>Manage Products</NavLink></ListItem>
              <ListItem><Button onClick={logOut} sx={{p:0}}><LogoutIcon sx={{mr:2}} color="secondary"/>Logout</Button></ListItem>
            </List>
      }
      
      
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ width: { sm: `calc(100% - ${drawerWidth}px)` }, ml: { sm: `${drawerWidth}px` }}} >
        <Toolbar>
          <IconButton
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }} color="inherit" aria-label="open drawer" edge="start"  >
            <MenuIcon />
            
          </IconButton>
          <Typography variant="h6" noWrap component="div"> Dashboard</Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth},
        }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
              display: { xs: 'none', sm: 'block' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth},
            }}
            open
            >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }} >
        <Toolbar />
        

        <Routes>
          <Route path="" element={<DashboardHome></DashboardHome>} />
          <Route path="pay" element={<Pay></Pay>} />
          <Route path="my-orders" element={<MyOrders></MyOrders>} />
          <Route path="review" element={<Review></Review>} />
          <Route path="manage-orders" element={<ManageAllOrders />} />
          <Route path="add-products" element={<AddProduct />} />
          <Route path="make-admin" element={<MakeAdmin />} />
          <Route path="manage-products" element={<ManageProducts />} />
      </Routes>

      </Box>
    </Box>
  );
}



export default DashboardDrawer;