import { useEffect, useState } from "react";
import { NewsList } from "../../NewsList";
import api from "../../../api/news";

const BASE_URL = `v2/everything?q=ukraine&apiKey=${process.env.REACT_APP_API_KEY}`;

export const NewsContainer = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const fetchArticles = async () => {
            try{
                const response = await api.get(BASE_URL);
                if(response && response.data) setArticles(response.data.articles);
            }catch(err){
                console.log(`Error: ${err.response.data}`);
            }
        }

        fetchArticles();
    }, [])

    return (
        <div className="news-container">
            <NewsList news={articles} />
        </div>
    )
}