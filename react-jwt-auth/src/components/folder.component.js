// components/folder.component.js
import React from 'react';

const Folders = () => {
    const folders = [
        { title: "Собственный", description: "Личные документы" },
        { title: "Правила", description: "Рабочий устав" },
        { title: "Примеры", description: "Шаблоны документов" }
    ];

    return (
        <div className="folders-temp">
            <h2 className="section-text">Папки</h2>
            <div className="folders">
                {folders.map((folder, index) => (
                    <div className="folder" key={index}>
                        <img src="https://img.icons8.com/ios-filled/100/folder-invoices.png" alt={folder.title} />
                        <div><strong>{folder.title}</strong></div>
                        <div>{folder.description}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Folders;