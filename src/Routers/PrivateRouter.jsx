import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRouter = ({component, condition, ...props}) => {
    if(!condition){
        return <Navigate to='/' />
    }
    return (
        component
    )
}

export default PrivateRouter;
