import React from "react";
import image from '../assests/news.png';

export default function NewsItem({ urlToImage, title, description, url }) {
  return (
        <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{ maxWidth: '325px'}}>
          <img src={urlToImage? urlToImage:image} className="card-img-top" style={{width:'300px', height:'200px'}} alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title.slice(0,50)}</h5>
            <p className="card-text">{description? description.slice(0,90):'This News Article is currently unable!'}</p>
            <a href={url} target='blank' className="btn btn-primary">
              Read Article
            </a>
          </div>
        </div>
  );
}
