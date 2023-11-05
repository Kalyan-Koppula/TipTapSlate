import React, { createContext, useReducer } from 'react'
import styles from './styles.scss'
import Input from '../Input'
import {AppContext, AppContextDispatch, appReducer, initialTasks} from '@src/context/AppContext'
import ToDoList from '../ToDoList'


const App = () => {

  const [tasks, dispatch] = useReducer(appReducer, initialTasks);
  
  return (
    <AppContext.Provider value={tasks}>
      <AppContextDispatch.Provider value={dispatch}>
        <div className={styles.appContainer}>
          <Input/>
          <ToDoList/>
        </div>
      </AppContextDispatch.Provider>
    </AppContext.Provider>
  )
}

export default App