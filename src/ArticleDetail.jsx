import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const articles = [
    {
        id: 1,
        title: "Article 1",
        description: "This is a short description of article 1.",
        content: "This is the full content of article 1.",
        imageUrl: "https://via.placeholder.com/300",
        date: "2023-01-01",
    },
    {
        id: 2,
        title: "Article 2",
        description: "This is a short description of article 2.",
        content: "This is the full content of article 2.",
        imageUrl: "https://via.placeholder.com/300",
        date: "2023-02-01",
    },
    // Добавьте больше статей по необходимости
];

const ArticleDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const article = articles.find((article) => article.id === parseInt(id));

    return (
        <div className=" mt-8">
            {article ? (
                <div>
                    <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
                    <img
                        src={article.imageUrl}
                        alt={article.title}
                        className="w-full h-64 object-cover rounded-lg mb-4"
                    />
                    <p className="text-gray-600 mb-4">{article.date}</p>
                    <p>{article.content}</p>
                    <button
                        className="mt-4 px-4 py-2 bg-blue-500 text-black rounded hover:bg-blue-600"
                        onClick={() => navigate(-1)}
                    >
                        Закрыть
                    </button>
                </div>
            ) : (
                <p>Статья не найдена</p>
            )}
        </div>
    );
};

export default ArticleDetail;
