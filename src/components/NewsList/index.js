import "./NewsList.styles.css";

export const NewsList = ({ news }) => {
    return (
        news.map(article => {
            const { source, urlToImage, title, author, publishedAt, url, description} = article;
            return (
                <p key={source.id} className="news-item">
                    <a href={url}>
                        <img src={urlToImage} alt={title} width="400px" height="250px"/>
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
                </p>
            )
        })
    )
}