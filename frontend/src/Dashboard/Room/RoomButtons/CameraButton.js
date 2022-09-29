import React, { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import VideocamIcon from '@material-ui/icons/Videocam';
import VideocamOffIcon from '@material-ui/icons/VideocamOff';

const CameraButton = ({ localStream }) => {
    const [cameraEnabled, setCameraEnabled] = useState(true);

    const handleToggleCamera = () => {
        localStream.getVideoTracks()[0].enabled = !cameraEnabled;
        setCameraEnabled(!cameraEnabled);
    };

    return (
        <>
            <IconButton onClick={handleToggleCamera} style={{color:'white'}}>
                {cameraEnabled ? <VideocamIcon /> : <VideocamOffIcon />}
            </IconButton>
        </>
    );
};

export default CameraButton;