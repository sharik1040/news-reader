import { useEffect, useState } from "react";
import { articles as mockArticles } from "../../../assets/mockdata/articles";
import { NewsList } from "../../NewsList";

export const NewsContainer = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        setArticles(mockArticles)
    }, []);

    return (
        <div className="news-container">
            <NewsList news={articles} />
        </div>
    )
}