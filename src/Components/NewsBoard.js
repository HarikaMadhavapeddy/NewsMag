import axios from "axios";
import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

export default function NewsBoard({category}) {
  const [articles, setArticles] = useState([]);
  const apiKey = process.env.REACT_APP_API_KEY;
  //console.log(apiKey);
  useEffect(() => {
    console.log(category);
    /*axios
      .get(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`)*/
      axios.get("https://news-app-hazel-seven.vercel.app/news", {
        params: {
          country: "us",
          category,
          apiKey, // Use your News API key here
        },
      })
      .then((response) => {
        setArticles(response.data.articles);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [category]);
  console.log(articles);
  return (
    <div>
      <h2 className="text-center">
        Latest <span className="badge bg-danger">News</span>
      </h2>
      <div>
        {articles.map((article,index) => (
          <NewsItem
            key={index}
            title={article.title}
            description={article.description}
            urlToImage={article.urlToImage}
            url={article.url}
          />
        ))}
      </div>
    </div>
  );
}
