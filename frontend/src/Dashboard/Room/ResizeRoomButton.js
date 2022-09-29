import React from 'react';
import { styled } from '@mui/system';
import IconButton from '@mui/material/IconButton';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import FullscreenIcon from '@mui/icons-material/Fullscreen';


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