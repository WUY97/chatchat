import React from 'react';
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';

const InvitationDecisionButtons = ({
    disabled,
    acceptInvitationHandler,
    rejectInvitationHandler,
}
) => {
    return (
        <>
            <Box
                style={{
                    display: 'flex',
                }}
            >
                <IconButton
                    style={{color: 'white'}}
                    disabled={disabled}
                    onClick={acceptInvitationHandler}
                >
                    <CheckIcon />
                </IconButton>
                <IconButton
                    style={{color: 'white'}}
                    disabled={disabled}
                    onClick={rejectInvitationHandler}
                >
                    <ClearIcon />
                </IconButton>
            </Box>
        </>
    );
};

export default InvitationDecisionButtons;