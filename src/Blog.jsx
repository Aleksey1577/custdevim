import React from 'react';
import { useNavigate } from 'react-router-dom';

const articles = [
    {
        id: 1,
        title: 'DKIM-подпись: ваш щит в бушующем море спама',
        description: 'Ваш верный защитник в мире email-маркетинга.',
        imageUrl: 'https://via.placeholder.com/300',
        date: '02.03.2024',
    },
    {
        id: 2,
        title: 'Нужен ли кастдев в 2024 году?',
        description: 'Спойлер: однозначно да! Давайте разбираться в этой статье',
        imageUrl: 'https://via.placeholder.com/300',
        date: '17.02.2024',
    },
    {
        id: 3,
        title: 'Jobs to be done',
        description: 'Стремимся быстрее закрыть свою большую Jods',
        imageUrl: 'https://via.placeholder.com/300',
        date: '15.02.2024',
    },
    {
        id: 4,
        title: 'User Story',
        description: 'Как правильно формулировать пользовательские истории?',
        imageUrl: 'https://via.placeholder.com/300',
        date: '14.02.2024',
    },
    {
        id: 5,
        title: 'Article 5',
        description: 'This is a short description of article 5.',
        imageUrl: 'https://via.placeholder.com/300',
        date: '14.02.2024',
    },
    // Добавьте больше статей по необходимости
];

const Blog = () => {
    const navigate = useNavigate();

    const handleCardClick = (id) => {
        navigate(`/blog/${id}`);
    };

    return (
        <div className="pt-[150px]">
            <h1 className="typography-h2 text-center mb-4">Блог</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {articles.map(article => (
                    <div key={article.id} className="bg-white rounded-lg shadow-lg p-4 cursor-pointer" onClick={() => handleCardClick(article.id)}>
                        <img src={article.imageUrl} alt={article.title} className="w-full h-48 object-cover rounded-lg mb-4" />
                        <h3 className="typography-h3 mb-2">{article.title}</h3>
                        <p className="typography-blog mb-2">{article.description}</p>
                        <p className="typography-base">{article.date}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blog;