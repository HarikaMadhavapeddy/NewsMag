import axios from "axios";
import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

export default function NewsBoard({category}) {
  const [articles, setArticles] = useState([]);
  const apiKey = process.env.REACT_APP_API_KEY;
  //console.log(apiKey);
  useEffect(() => {
    console.log(category);
    //http://localhost:8080/news?country=us&category=general&apiKey=17564644f1a74c62b369028819d77324
    axios
      .get(`https://new-mag-backend.vercel.app/news?country=us&category=${category}&apiKey=${apiKey}`)
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
