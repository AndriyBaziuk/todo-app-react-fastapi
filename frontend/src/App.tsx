import React, {useState} from 'react';
import './App.module.css';
import {Todolist} from './Todolist'
import {v1} from 'uuid';

export type FilterValuesType = "all" | "completed" | "active";
function App() {
    let [tasks, setTasks] = useState([
        {id: v1(), title: "HTML CSS", isDone: true},
        {id: v1(), title: "JS", isDone: true},
        {id: v1(), title: "ReactJS", isDone: false},
        {id: v1(), title: "Redux", isDone: false},
    ])
    let [filter, setFilter] = useState<FilterValuesType>("all");

    let tasksForTodolist = tasks;
        if (filter === "completed") {
            tasksForTodolist = tasks.filter( t => t.isDone === true);
        }
        if (filter === "active") {
            tasksForTodolist = tasks.filter( t => t.isDone === false);
        }

    function changeFilter(value: FilterValuesType) {
            setFilter(value);
    }
    function removeTask(id: string) {
        let filteredTasks = tasks.filter( t => t.id !== id )
        setTasks(filteredTasks);
    }

    function addTask(title: string) {
        let newTask = {
            id: v1(),
            title: title,
            isDone: false
        };
        let newTasks = [newTask, ...tasks];
        setTasks(newTasks)
    }

    return (
        <div className="app">
            <Todolist title="What to learn"
                      tasks={tasksForTodolist}
                      removeTask={removeTask}
                      changeFilter={changeFilter}
                      addTask={addTask}
            />
        </div>
    );
}
export default App;