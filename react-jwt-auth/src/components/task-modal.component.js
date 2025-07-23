// components/TasksModal.js
import React, { useState } from 'react';

const TasksModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const tasks = [
        { task: "Подготовить отчёт", deadline: "10.07.2025", sender: "Даурен Ашимжанович" },
        { task: "Обновить список задач", deadline: "12.07.2025", sender: "Аманбек Матайұлы" },
        { task: "Проверить почту", deadline: "09.07.2025", sender: "Тугамбаева Аружан" }
    ];

    return (
        <div className={`modal-overlay tasks-modal ${isOpen ? 'active' : ''}`}>
            <div className="modal">
                <div className="modal-header">
                    Список задач
                    <button
                        className="close-button"
                        onClick={() => setIsOpen(false)}>
                        &times;
                    </button>
                </div>
                <div className="modal-body">
                    <table className="tasks-table">
                        <thead>
                        <tr>
                            <th>Задача</th>
                            <th>Срок</th>
                            <th>Отправитель</th>
                        </tr>
                        </thead>
                        <tbody>
                        {tasks.map((task, index) => (
                            <tr key={index}>
                                <td>{task.task}</td>
                                <td>{task.deadline}</td>
                                <td>{task.sender}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default TasksModal;