import React from 'react';
import { styled } from '@mui/system';
import IconButton from '@material-ui/core/IconButton';
import FullscreenExitIcon from '@material-ui/icons/FullscreenExit';
import FullscreenIcon from '@material-ui/icons/Fullscreen';


const MainContainer = styled('div')({
    position: 'absolute',
    bottom: '10px',
    right: '10px',
});

const ResizeRoomButton = ({isRoomMinimized, handleRoomResize}) => {
    return (
        <>
            <MainContainer>
                <IconButton style={{ color: 'white' }} onClick={handleRoomResize}>
                    {isRoomMinimized ? <FullscreenIcon /> : <FullscreenExitIcon />}
                </IconButton>
            </MainContainer>
        </>
    );
};

export default ResizeRoomButton;