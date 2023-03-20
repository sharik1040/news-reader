import HomeImg from "../../assets/images/login/img3.jpg";
import "./NewsList.styles.css";

export const NewsList = ({ news }) => {
    return (
        news.map(article => {
            const { source, urlToImage, title, author, publishedAt, url, description} = article;
            const imgUrl = urlToImage ? urlToImage : HomeImg;
            return (
                <div key={`${source.id}-${publishedAt}`} className="news-item">
                    <a href={url}>
                        {
                            <img src={imgUrl} alt={title} width="400px" height="250px"/>
                        }
                    </a>
                    <div>
                        <h1>{title}</h1>
                        <div>
                            <span>{author}</span>
                            <span>{publishedAt}</span>
                        </div>
                        <div>
                            { description }
                        </div>
                    </div>
                </div>
            )
        })
    )
}