import React, { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import MicIcon from '@material-ui/icons/Mic';
import MicOffIcon from '@material-ui/icons/MicOff';

const MicButton = ({ localStream }) => {
    const [micEnabled, setMicEnabled] = useState(true);

    const handleToggleMic = () => {
        localStream.getAudioTracks()[0].enabled = !micEnabled;
        setMicEnabled(!micEnabled);
    };

    return (
        <>
            <IconButton onClick={handleToggleMic} style={{color:'white'}}>
                {micEnabled ? <MicIcon /> : <MicOffIcon />}
            </IconButton>
        </>
    );
};

export default MicButton;