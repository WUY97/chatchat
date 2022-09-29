import React from 'react';
import Menu from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import { logout } from '../../shared/utils/auth';
import { getActions } from '../../store/actions/roomActions';
import { connect } from 'react-redux';

const BasicMenu = ({ audioOnly, setAudioOnly }) => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleAudioOnlyChange = () => {
        setAudioOnly(!audioOnly);
    };

    return (
        <div>
        <IconButton onClick={handleMenuOpen} style={{color:'white'}}>
            <MoreVertIcon />
        </IconButton>
        <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={logout}>Logout</MenuItem>
            <MenuItem onClick={handleAudioOnlyChange}>
                {audioOnly ? 'Audio Only Enabled' : 'Audio Only Disabled'}
            </MenuItem>
        </Menu>
        </div>
    );
}

const mapStoreStateToProps = ({ room }) => {
    return {
        ...room,
    };
};

const mapActionsToProps = (dispatch) => {
    return {
        ...getActions(dispatch),
    }
};

export default connect(mapStoreStateToProps, mapActionsToProps)(BasicMenu);