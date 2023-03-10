import React from 'react';
import { Link } from 'react-router-dom';
import './Form.less'

const Form = ({inputOne,inputTwo,title, subtitle, link,errorText, constHandle,buttonName, submitFunction, ...props}) => {
    return (
        <form className='Form'onSubmit={(event) => submitFunction(event)}>
            <h1>{title}</h1>
            {constHandle ? <h2>{errorText}</h2> : null}
            <div className='form-container'>
                <div className='input-container'>
                    <label>{inputOne.name}</label>
                    <input value={inputOne.state} 
                           required={true}
                           onChange={(event) => inputOne.setState(event.target.value)}/>
                </div>
                <div className='input-container'>
                    <label>{inputTwo.name}</label>
                    <input value={inputTwo.state} 
                           required={true}
                           onChange={(event) => inputTwo.setState(event.target.value)}/>
                </div>
                <Link className='linkTo' to={link}>{subtitle}</Link>
                <button type='submit'>{buttonName}</button>
            </div>
        </form>
    );
}

export default Form;
