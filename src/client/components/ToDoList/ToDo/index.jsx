import React, { useContext, useState } from 'react'
import { AppContextDispatch, actions } from '@src/context/AppContext'
import styles from './styles.scss'
import DefaultCheckbox from '@src/assets/Icons/Checkbox/default.svg'
import CheckedCheckbox from '@src/assets/Icons/Checkbox/checked.svg'

const ToDo = ({ task }) => {
    const [isChecked, setIsChecked] = useState(task.done);
    const [editInProgress, setEditInProgress] = useState(false);
    const [todoValue, setTodoValue] = useState(task.todo);
    const [enableSave, setEnableSave] = useState(true);
    const dispatch = useContext(AppContextDispatch);
    const handleOnChange = (event) => {
        setIsChecked(prevIsChecked => !prevIsChecked);
        const actionType = isChecked ? actions.PROGRESS : actions.DONE;
        dispatch({ type: actionType, payload: { ...task } })
    }
    const handleTodoEdit = (event) => {
        setTodoValue(event.target.value);
        setEnableSave(!!event.target.value);
    }
    const handleOnSave = () => {
        setEditInProgress(false);
        dispatch({ type: actions.EDIT, payload: { ...task, todo: todoValue } });
    }
    const handleEditView = () => {
        !isChecked && setEditInProgress(true);
    }
    const handleDelete = () => {
        dispatch({ type: actions.DEL, payload: { ...task } });
    }
    return (
        <div>
            {!editInProgress && (
                <div className={styles.todoContainer}>
                    <img onClick={handleOnChange} src={isChecked ? CheckedCheckbox : DefaultCheckbox} />
                    <label className={task.done ? styles.doneTodo : ''} onClick={handleEditView}>{task.todo}</label>
                    <button onClick={handleDelete}>Delete</button>
                </div>
            )}
            {editInProgress && <input type="text" value={todoValue} onChange={handleTodoEdit} />}
            {!isChecked && editInProgress && <button onClick={handleOnSave} disabled={!enableSave}>Save</button>}
        </div>
    )
}

export default ToDo