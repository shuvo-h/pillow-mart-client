import React from 'react';
import Drawer from '@mui/material/Drawer';
import { NavLink } from 'react-router-dom';
import List from '@mui/material/List';
import { ListItemButton } from '@mui/material';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import useAuth from "../../../../hooks/useAuth";

const NavigationDrawer = ({openNavDrawer,setOpenNavDrawer}) => {
    const {user,logOut} = useAuth();
    const [categoryOpen, setCategoryOpen] = React.useState(false);
    const [profileOpen, setProfileOpen] = React.useState(false);

    const handleCategoryClick = () => {
        setCategoryOpen(!categoryOpen);
    };
    const handleProfileClick = () => {
        setProfileOpen(!profileOpen);
    };
    return (
        <Drawer anchor="right" open={openNavDrawer}>
            <List>
                <ListItemButton divider onClick={()=>setOpenNavDrawer(false)}>
                    <NavLink to="/home" 
                        style={{color:"black", textDecoration:"none", padding:"10px 10px"}}>
                            Home
                    </NavLink>
                </ListItemButton>
                <ListItemButton divider onClick={()=>setOpenNavDrawer(false)}>
                    <NavLink to="/explore" 
                        style={{color:"black", textDecoration:"none", padding:"10px 10px"}}>
                            Explore
                    </NavLink>
                </ListItemButton>

                <ListItemButton onClick={handleCategoryClick} divider>
                    <NavLink to="" 
                        style={{color:"black", textDecoration:"none", padding:"10px 10px"}}>
                            Events
                    </NavLink>
                    {categoryOpen ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={categoryOpen} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }}>
                            <List>
                                <ListItemButton>
                                    <NavLink to="" 
                                        onClick={()=>setOpenNavDrawer(false)}
                                        style={{color:"black", textDecoration:"none", padding:"10px 10px"}}>
                                            event 1
                                    </NavLink>
                                </ListItemButton>
                                <ListItemButton>
                                    <NavLink to="" 
                                        onClick={()=>setOpenNavDrawer(false)}
                                        style={{color:"black", textDecoration:"none", padding:"10px 10px"}}>
                                            event 2
                                    </NavLink>
                                </ListItemButton>
                            </List>
                        </ListItemButton>
                    </List>
                </Collapse>
                <ListItemButton divider onClick={()=>setOpenNavDrawer(false)}>
                    <NavLink to="" 
                        style={{color:"black", textDecoration:"none", padding:"10px 10px"}}>
                            Blogs
                    </NavLink>
                </ListItemButton>
                {(user.email && <>
                    <ListItemButton divider onClick={handleProfileClick}>
                        <NavLink to="" 
                            style={{color:"black", textDecoration:"none", padding:"10px 10px"}}>
                                {user.displayName}
                        </NavLink>
                        {profileOpen ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={profileOpen} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 4 }}>
                                <List>
                                    <ListItemButton>
                                        <NavLink to="" 
                                            onClick={()=>setOpenNavDrawer(false)}
                                            style={{color:"black", textDecoration:"none", padding:"10px 10px"}}>
                                                Profile
                                        </NavLink>
                                    </ListItemButton>
                                    <ListItemButton>
                                        <NavLink to="/dashboard" 
                                            onClick={()=>setOpenNavDrawer(false)}
                                            style={{color:"black", textDecoration:"none", padding:"10px 10px"}}>
                                                Dshboard
                                        </NavLink>
                                    </ListItemButton>
                                    <ListItemButton>
                                        <NavLink to="" 
                                            onClick={()=>setOpenNavDrawer(false)}
                                            style={{color:"black", textDecoration:"none", padding:"10px 10px"}}>
                                                Settings
                                        </NavLink>
                                    </ListItemButton>
                                    <ListItemButton>
                                        <NavLink to="" 
                                            onClick={()=>{setOpenNavDrawer(false);logOut();}}
                                            style={{color:"black", textDecoration:"none", padding:"10px 10px"}}>
                                                Logout
                                        </NavLink>
                                    </ListItemButton>
                                </List>
                            </ListItemButton>
                        </List>
                    </Collapse>
                </>)}
            {
                !user.email && <ListItemButton divider onClick={()=>setOpenNavDrawer(false)}>
                    <NavLink to="/login" 
                        style={{color:"black", textDecoration:"none", padding:"10px 10px"}}>
                            Login
                    </NavLink>
                </ListItemButton>
             }
            </List>
        </Drawer>
    );
};

export default NavigationDrawer;