import React from 'react'
import './style.css'
import PageHeader from '../../components/PageHeader'
import ResearchCard from '../../components/ResearchCard'
import ResearchData from '../../ResearchDetails.json'

const Research = () => {
  return (
    <>
      <PageHeader heading={"Research"} classname={"research-header-div"}/>
      <div className="research-container">
      {ResearchData?.map((data)=>
        <ResearchCard id = {data.id} image = {data.image} title = {data.title} publishedAt = {data.publishedAt} description = {data.description}/>
      )}
      </div>
    </>
  )
}

export default Research