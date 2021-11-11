import { Box } from '@mui/system';
import React from 'react';
import DashboardDrawer from '../DashboardDrawer/DashboardDrawer';

const Dashboard = () => {
    return (
        <Box >
            <Box>
                <DashboardDrawer></DashboardDrawer>
            </Box>
        </Box>
    );
};

export default Dashboard;