import React from 'react';

const WrongPasswordComp = ({wrong, text, styles,...props}) => {
    return (
            (wrong ? <h2 className='wrongpass' style={styles}>{text}</h2> : <></>)
    );
}

export default WrongPasswordComp;
