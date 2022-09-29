import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import * as roomHandler from '../../../realtimeCommunication/roomHandler';

const CloseRoomButton = () => {
    const handleLeaveRoom = () => {
        roomHandler.leaveRoom();
    };

    return (
        <>
            <IconButton onClick={handleLeaveRoom} style={{color:'white'}}>
                <CloseIcon />
            </IconButton>
        </>
    );
};

export default CloseRoomButton;