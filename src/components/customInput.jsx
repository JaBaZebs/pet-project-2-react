import React from 'react';

const CustomInput = ({pole, setPole,...props}) =>{
    return(
        <section className='LoginSection'>
            <div className='input-focus'>
                        <input value={pole} onChange={(e) => setPole(e.target.value)} placeholder=" " required/>
                        <span className='span-focus' text={props.text}/>
            </div>
        </section>
    )
}


export default CustomInput;
