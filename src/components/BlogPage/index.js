import './style.css';
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Data from '../../ResearchBlogDetails.json'

const BlogPage = () => {

  const id_str = useParams();
  const id = parseInt(id_str.id);
  const data = Data[id];

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <div className="blog-div">
      <div className="blog-heading-div">
        <h1>{data.title}</h1>
      </div>
      <div className="blog-published-div">
        <h3><span>Published at: </span>{data.publishedAt}</h3>
      </div>
      <div className="blog-image">
        <img src={data.image} alt={data.title} />
      </div>
      <div className="blog-description-div">
        <p>{data.description}</p>
      </div>
    </div>
  )
}

export default BlogPage