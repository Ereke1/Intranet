// components/services.component.js
import React from 'react';

const Services = () => {
    const services = [
        { url: "https://docs.agakaz.kz/", icon: process.env.PUBLIC_URL + "/Qdoc.svg", name: "Qdoc" },
        { url: "https://caa.edu.kz/library", icon: process.env.PUBLIC_URL + "/logo_agakaz_b.png", name: "Библиотека" },
        { url: "https://platonus.kz/", icon: process.env.PUBLIC_URL + "/logo-platonus.png", name: "Platonus" },
        { url: "https://caa.edu.kz/", icon: process.env.PUBLIC_URL + "/logo_agakaz_b.png", name: "Сайт Академии" },
        { url: "https://moodle.agakaz.kz/", icon: process.env.PUBLIC_URL + "/moodle.png", name: "Moodle" },
        { url: "https://college.caa.edu.kz/", icon: process.env.PUBLIC_URL + "/logo_agakaz_b.png", name: "Сайт Колледжа" }
    ];

    return (
        <div className="icons-temp">
            <h2 className="section-text">Сервисы</h2>
            <div className="icons">
                {services.map((service, index) => (
                    <div className="icon" key={index}>
                        <a href={service.url} style={{textDecoration: "none", color: "#001f4d"}}>
                            <img src={service.icon} alt={service.name}
                                 style={service.icon.includes('logo_agakaz_b') ? {width: "85px"} : {}} />
                            <div>{service.name}</div>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;