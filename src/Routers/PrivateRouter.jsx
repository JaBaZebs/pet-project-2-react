import React from 'react';
import { Navigate } from 'react-router-dom';

<<<<<<< HEAD
const PrivateRouter = ({component, condition, ...props}) => {
    if(!condition){
        return <Navigate to='/' />
=======
const PrivateRouter = ({component, condition, navigateTO,...props}) => {
    if(!condition){
        return <Navigate to={navigateTO} />
>>>>>>> d20de100 (complete)
    }
    return (
        component
    )
}

export default PrivateRouter;
