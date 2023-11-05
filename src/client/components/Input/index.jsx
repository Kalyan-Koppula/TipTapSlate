import React, { useContext, useState } from 'react'
import {AppContextDispatch, actions} from '@src/context/AppContext'

const Input = () => {
    const dispatch = useContext(AppContextDispatch);
    const [isDisabled, setIsDisabled] = useState(true);
    const [todo, setTodo] = useState('');
    const handleInputChange = (event) => {
        setTodo(event.target.value);
        event.target.value ? setIsDisabled(false) : setIsDisabled(true);
    }
    const handleSubmit = () => {
        todo && dispatch({type:actions.ADD,payload:todo});
        setTodo('');
        setIsDisabled(true);
    }
    return (
        <>
            <input type="text" value={todo} onChange={handleInputChange}/>
            <button disabled={isDisabled} onClick={handleSubmit}>Add</button>
        </>
    )
}

export default Input