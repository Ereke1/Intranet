// components/event.component.js
import React from 'react';

const UpcomingEvents = () => {
    const events = [
        { date: "11 июля", event: "Встреча преподавателей" },
        { date: "18 июля", event: "Семинар по безопасности" },
        { date: "22 июля", event: "Тренинг" },
        { date: "25 июля", event: "Семинар по ИИ" }
    ];

    return (
        <section>
            <div className="upcoming">
                <h2>Ближайшие события</h2>
                <ul>
                    {events.map((event, index) => (
                        <li key={index}>
                            <span>{event.date}</span>
                            {event.event}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default UpcomingEvents;