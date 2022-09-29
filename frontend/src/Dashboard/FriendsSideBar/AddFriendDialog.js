import { React, useState, useEffect } from 'react'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Typography } from '@mui/material';
import { connect } from 'react-redux';

import { validateMail } from '../../shared/utils/validators';
import InputWithLabel from '../../shared/components/InputWithLabel';
import CustomPrimaryButton from '../../shared/components/SharedPrimaryButton';
import { getActions } from '../../store/actions/friendsActions';

const AddFriendDialog = ({
    isDialogOpen,
    closeDialogHandler,
    sendFriendInvitation = () => {},
}) => {
    const [mail, setMail] = useState('');
    const [isFormValid, setIsFormValid] = useState('');

    const handleSendInvitation = () => {
        sendFriendInvitation(
            {
                targetMailAddress: mail,
            },
            handleCloseDialog
        );
    };

    const handleCloseDialog = () => {
        closeDialogHandler();
        setMail('');
    };

    useEffect(() => {
        setIsFormValid(validateMail(mail));
    },[mail, setIsFormValid]);
    

    return (
        <>
            <Dialog open={isDialogOpen} onClose={handleCloseDialog}>
                <DialogTitle>
                    <Typography>Invite a Friend</Typography>
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <Typography>Enter e-mail address of friend which you would like to invite</Typography>
                    </DialogContentText>
                    <InputWithLabel 
                        label='Mail'
                        type='text'
                        value={mail}
                        setValue={setMail}
                        placeholder='Enter e-mail address'
                    />
                </DialogContent>
                <DialogActions>
                    <CustomPrimaryButton
                        onClick={handleSendInvitation}
                        disabled={!isFormValid}
                        label='Send'
                        additionalStyles={{
                            marginLeft:'15px',
                            marginRight:'15px',
                            marginBottom:'10px',
                        }}
                        />
                </DialogActions>
            </Dialog>
        </>
    )
}

const mapActionsToProps = (dispatch) => {
    return {
        ...getActions(dispatch)
    }
}

export default connect(null, mapActionsToProps)(AddFriendDialog);