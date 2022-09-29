import React from 'react';
import {Box } from '@mui/material';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

const OnlineIndicator = () => {
    return (
        <>
            <Box
                sx={{
                    color: "#3ba55d",
                    display: "flex",
                    alignItems: "center",
                    position: "absolute",
                    right: "5px",
                }}
            >
                <FiberManualRecordIcon />
            </Box>
        </>
    );
};

export default OnlineIndicator;