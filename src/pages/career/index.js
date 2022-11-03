import React from 'react'
import OpenPosition from '../../components/OpenPosition'
import PageHeader from '../../components/PageHeader'
import Positions from '../../OpenPostionDetails.json'
import './style.css'

const Career = () => {
  return (
    <div className='career-container'>
      <PageHeader heading={"Career"} classname = {"career-header-div"}/>
      <div className="open-position-div">
        <h3>Open Position</h3>
        {Positions?.map((data)=>
            <OpenPosition position = {data.position} team = {data.team} link = {data.link} location = {data.location} postedOn = {data.postedOn} description = {data.description} />
        )}  
      </div>
    </div>
  )
}

export default Career