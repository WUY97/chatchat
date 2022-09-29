import React, { useEffect } from 'react';
import { styled } from '@mui/system';
import { connect } from 'react-redux';


import SideBar from '../Dashboard/SideBar/SideBar';
import AppBar from '../Dashboard/AppBar/AppBar';
import FriendsSideBar from '../Dashboard/FriendsSideBar/FriendsSideBar';
import Messenger from '../Dashboard/Messenger/Messenger';
import { logout } from '../shared/utils/auth';
import { getActions } from '../store/actions/authActions';
import { connectWithSocketServer }  from '../realtimeCommunication/socketConnection'
import Room from './Room/Room';

const Wrapper = styled('div')({
    width: '100%',
    height: '100vh',
    display: 'flex',
});

const Dashboard = ({ setUserDetails, isUserInRoom }) => {
    useEffect(() => {
        const userDetails = localStorage.getItem('user');

        if(!userDetails){
            logout();
        } else {
            setUserDetails(JSON.parse(userDetails));
            connectWithSocketServer(JSON.parse(userDetails));
        }
    },[]);

    return (
        <Wrapper>
            <SideBar />
            <FriendsSideBar />
            <Messenger />
            <AppBar />
            {isUserInRoom && <Room />}
        </Wrapper>
    )
};

const mapStoreStateToProps = ({ room }) => {
    return {
        ...room,
    };
};

const mapActionsToProps = (dispatch) => {
    return {
        ...getActions(dispatch),
    };
};

export default connect(mapStoreStateToProps, mapActionsToProps)(Dashboard);
