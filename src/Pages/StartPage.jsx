import ky from 'ky';
import { useNavigate } from 'react-router-dom';
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Types from '../../redux/actionType';

const StartPage = () => {
    const navigate = useNavigate();
    const reduxData = useSelector(state => state);

    useEffect(() => {
        reduxData.auth ? navigate('/todos') : navigate('/login');
    }, []);
    return (
        <div className='StartPage'>
        </div>
    );
}

export default StartPage;
