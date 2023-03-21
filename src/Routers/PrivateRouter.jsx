import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRouter = ({component, condition, navigateTO,...props}) => {
    if(!condition){
        return <Navigate to={navigateTO} />
    }
    return (
        component
    )
}

export default PrivateRouter;
