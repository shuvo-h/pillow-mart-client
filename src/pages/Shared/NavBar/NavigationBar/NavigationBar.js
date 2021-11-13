import React, { useState } from 'react';
import { AppBar, Badge, Button, IconButton, Toolbar, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Box, useTheme } from '@mui/system';
import { NavLink } from 'react-router-dom';
import MailIcon from '@mui/icons-material/Mail';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import NavigationDrawer from '../NavigationDrawer/NavigationDrawer';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import useAuth from '../../../../hooks/useAuth';

const NavigationBar = () => {
    const {user,logOut} = useAuth();
    const [openNavDrawer,setOpenNavDrawer] = useState(false);
    const [anchorElCategory,setAnchorElCategory] = useState(null);
    const openMenu = Boolean(anchorElCategory);
    const [anchorElProfile,setAnchorElProfile] = useState(null);
    const openProfile = Boolean(anchorElProfile);

    // make responsive breakpoint 
    const theme = useTheme();
    const themeBreakpoint = theme.breakpoints.down("md");
    const matches = useMediaQuery(themeBreakpoint);

    const handleCategoryOpen = e => setAnchorElCategory(e.currentTarget);
    const handleCategoryClose = () => setAnchorElCategory(null);

    const handleProfileOpen = e => setAnchorElProfile(e.currentTarget);
    const handleProfileClose = () => setAnchorElProfile(null);

    const activeNaveItemStyle = ({isActive}) =>{
        return { 
            textDecoration:"none", 
            padding:"10px 10px",
            color: isActive ? "yellow" : "white"
        }
         
    }
    const activeNestedNavStyle = ({isActive}) =>{
        return{
            textDecoration:"none", 
            display:"flex", 
            alignItems:"center",
            color: isActive ? "green" : "blue"
        }
    }
    
    return (
        <>
        
        <AppBar elevation={0} sx={{backgroundColor:"DarkSlateGray"}}> 
            <Toolbar>
                <Box sx={{display:"flex", justifyContent:"space-between", width:"100%"}} component="div">
                    
                    {/* Brand name or logo  */}
                    <Box sx={{display:"flex",alignItems:"center", width:"350px", justifyContent:"center"}}>
                        <NavLink to="" style={{color:"yellow", textDecoration:"none", fontSize:"30px"}}>Pillow Mart</NavLink>
                    </Box>

                    {/* Nav Links  */}
                    {
                        matches 
                        ? <NavigationDrawer openNavDrawer={openNavDrawer} setOpenNavDrawer={setOpenNavDrawer}></NavigationDrawer>
                        : <Box sx={{display:"flex", justifyContent:"space-between", width:"100%"}} component="div">
                            <Box sx={{display:"flex", alignItems:"center"}}>
                                <Box>
                                    <NavLink to="/home" 
                                    style={activeNaveItemStyle}>
                                        Home
                                    </NavLink>
                                    <NavLink to="/explore" 
                                    style={activeNaveItemStyle}>
                                        Explore
                                    </NavLink>
                                    <NavLink to="" style={activeNaveItemStyle}>
                                        <Button 
                                            style={{color:"white", textTransform:"capitalize"}}
                                            aria-controls="fade-menu" 
                                            aria-haspopup="true"
                                            aria-expanded={openMenu ? 'true' : undefined}
                                            onClick={handleCategoryOpen}
                                            endIcon={<KeyboardArrowDownIcon />}
                                        >Events</Button>
                                        {/* dropdown menu  */}
                                        <Menu id="fade-menu"
                                                MenuListProps={{'aria-labelledby': 'fade-button',}}
                                                anchorEl={anchorElCategory}
                                                open={openMenu}
                                                onClose={handleCategoryClose}
                                                TransitionComponent={Fade}
                                            >
                                                <MenuItem onClick={handleCategoryClose}>Item 1</MenuItem>
                                                <MenuItem onClick={handleCategoryClose}>Item 2</MenuItem>
                                                <MenuItem onClick={handleCategoryClose}>Item 3</MenuItem>
                                        </Menu>
                                    </NavLink>
                                    <NavLink to="/blog" style={activeNaveItemStyle}>Blogs</NavLink>
                                </Box>
                            </Box>
                            <Box>
                                {user.email && <Badge sx={{m:1}} badgeContent={8} color="primary">
                                    <ShoppingCartIcon color="white" />
                                </Badge>}
                                {user.email && <Badge sx={{m:1}} badgeContent={108} max={99} color="primary">
                                    <CircleNotificationsIcon color="white" />
                                </Badge>}
                                {user.email && <Badge sx={{m:1}} badgeContent={108} max={99} color="success">
                                    <MailIcon color="action" />
                                </Badge>}
                                    { ( user.email && 
                                                    <NavLink to="" style={{textDecoration:"none", padding:"10px 10px"}}>
                                                        <Button 
                                                            style={{color:"white"}}
                                                            aria-controls="fade-menu" 
                                                            aria-haspopup="true"
                                                            aria-expanded={openProfile ? 'true' : undefined}
                                                            onClick={handleProfileOpen}
                                                            endIcon={<KeyboardArrowDownIcon />}
                                                            >{user.displayName}
                                                        </Button>
                                                        {/* dropdown menu  */}
                                                        <Menu id="fade-profile"
                                                                MenuListProps={{'aria-labelledby': 'fade-button',}}
                                                                anchorEl={anchorElProfile}
                                                                open={openProfile}
                                                                onClose={handleProfileClose}
                                                                TransitionComponent={Fade}
                                                            >
                                                                <MenuItem onClick={handleProfileClose}>
                                                                    <NavLink to="/profile" style={activeNestedNavStyle}><AccountCircleIcon sx={{mr:2,color:"green"}} fontSize="small" color="green"/>
                                                                        Profile
                                                                    </NavLink>
                                                                </MenuItem>
                                                                <MenuItem onClick={handleProfileClose}>
                                                                    <NavLink to="/dashboard" style={activeNestedNavStyle}><DashboardCustomizeIcon sx={{mr:2}} fontSize="small" color="primary"/>
                                                                        Dshboard
                                                                    </NavLink>
                                                                </MenuItem>
                                                                <MenuItem onClick={handleProfileClose}>
                                                                    <NavLink to="/settings" style={activeNestedNavStyle}><SettingsIcon sx={{mr:2,color:"black"}} fontSize="small" color="green"/>
                                                                        Settings
                                                                    </NavLink>
                                                                </MenuItem>
                                                                <MenuItem onClick={handleProfileClose}>
                                                                    <LogoutIcon sx={{mr:2,color:"black"}} fontSize="small" color="green"/>
                                                                    <Button sx={{p:0,color:"inherit"}} onClick={logOut}>Logout</Button>
                                                                </MenuItem>
                                                        </Menu>
                                                    </NavLink>
                                        )}
                                    {
                                        !user.email && <NavLink to="/login" style={{textDecoration:"none"}}><Button sx={{color:"white"}}> Login</Button></NavLink>
                                    }
                            </Box>
                        </Box>
                    }

                    {/* responsive icon  */}
                    {
                        matches && <Box>
                        <IconButton onClick={()=>setOpenNavDrawer(true)}>
                            <MenuIcon></MenuIcon>
                        </IconButton>
                    </Box>
                    }
                </Box>
            </Toolbar>
        </AppBar>
        </>
    );
};

export default NavigationBar;