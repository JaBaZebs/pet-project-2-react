import React from 'react';
import user_icon from '../img/user_icon.svg';
import exit_img from '../img/exit_ico.svg'
import ky from 'ky';
import { useDispatch } from 'react-redux';
import { outloginRequest } from '../hooks/useAPI';
import Types from '../../redux/actionType';


const User = ({user,...props}) => {
    const dispatch = useDispatch();
    return (
        <div className='user'>
                    <img src={user_icon}/>
                    <h1>{user.user.name}</h1>
                    <button className='exit' onClick={() => {
                        ky.post('http://localhost:5000/outlogin', {credentials: 'include'}).json().then(data => dispatch({type: Types.SET_USER, payload: {user: {...user.user}, auth: false}}));
                    }}>
                        <img src={exit_img}/>
                    </button>
        </div>
    );
}

export default User;
