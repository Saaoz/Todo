import React, { useState } from 'react';
import TodoInput from '../components/common/Todo_input';
import Liste from '../components/common/Liste';
import Header from '../components/Header_Footer/Header';


function Home() {
    const [taskList, setTaskList] = useState([]);

    const addTask = (task) => {
        setTaskList((prevTasks) => [...prevTasks, task]);
    };

    const deleteTask = (index) => {
        const newTasks = [...taskList];
        newTasks.splice(index, 1);
        setTaskList(newTasks);
    };

    return (
        <>
            <Header />
            <TodoInput addTask={addTask} />
            <Liste tasks={taskList} deleteTask={deleteTask} />
            
        </>
    );
}

export default Home;
