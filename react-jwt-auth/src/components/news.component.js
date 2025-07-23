// components/news.component.js
import React from 'react';

const News = () => {
    const newsItems = [
        {
            url: 'https://caa.edu.kz/news/577',
            title: 'Будущее гражданской авиации: профессии, навыки, решения'
        },
        {
            url: 'https://caa.edu.kz/news/576',
            title: 'Семинар-тренинг для ППС академии'
        },
        {
            url: 'https://caa.edu.kz/news/575',
            title: '«Национальный дух – основа знаний» по методике «Дискуссия за кесе самоварного чая»'
        }
    ];

    return (
        <section className="news">
            <h2>Новости академии</h2>
            {newsItems.map((item, index) => (
                <a key={index} className="news-button" href={item.url}>
                    {item.title}
                </a>
            ))}
        </section>
    );
};

export default News;