import { Component } from "react";

class ToDoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],      // список задач
            input: ''       // тек. значение ввода         
        };
    }

    //обработчик изменения текстового поля 
    handleInputChange = (event) => {
        this.setState({ input: event.target.value });
    }

    // добавляем новую задачу
    addTask = () => {
        const { input, tasks } = this.state;
        if (input.trim() === '') return; // если строка ввода пустая , задачу не добавляем
        const newTask = { text: input, completed: false };
        this.setState({
            tasks: [...tasks, newTask], // задачу добавили
            input: '' // строку ввода почистили
        });
    }

    // удаляем задачу по индексу
    deleteTask = (index) => {
        const { tasks } = this.state;
        const updatedTasks = tasks.filter((_, i) => i !== index);
        this.setState({ tasks: updatedTasks });
    }

    // переключение состояния выполнения задачи 
    toggleTask = (index) => {
        const { tasks } = this.state;
        const updatedTasks = tasks.map((tasks, i) => {
            if (i === index) {
                return { ...tasks, completed: !tasks.completed };
            }
            return tasks;
        });
        this.setState({ tasks: updatedTasks });
    }

    render() {
        const { tasks, input } = this.state;

        return (
            <div className="todo-container">
                <h4>To Do List</h4>
                <div className="input-selection">
                    < input
                        type="text"
                        value={input}
                        onChange={this.handleInputChange}
                        placeholder="Enter to new task"
                        onKeyPress={(e) => { if (e.key === 'Enter') this.addTask(); }}
                    />
                    <button onClick={this.addTask}>Add</button>
                </div>
                <ul className="task-list">
                    {tasks.map((task, index) => (
                        <li key={index} className="task-item">
                            <input
                                type="checkbox"
                                checked={task.completed}
                                onChange={() => this.toggleTask(index)}
                            />
                            <span className={task.completed ? 'completed' : ''}>{task.text}</span>
                            <button className="delete-button" onClick={() => this.deleteTask(index)}>✖</button>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export function ToDoListApp() {
    return <>
        <ToDoList />
    </>
}