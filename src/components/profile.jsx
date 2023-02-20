import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Types from '../../redux/actionType';

const Profile = ({LogoForUser, username, LogoForExit, ...props}) => {
    let navigate = useNavigate();
    const dispatch = useDispatch();

    function onExit(){
        dispatch({type: Types.RESET_USER});
        dispatch({type: Types.SET_AUTH_FALSE});
        navigate('/');
    }

    return (
        <div className='profile'>
        <div className='profile-container'>
          <img src={LogoForUser}/>
          <h1>{username}</h1>
        </div>
        <button onClick={() => onExit()}>
          <img src={LogoForExit}/>
        </button>
      </div>
    );
}

export default Profile;
