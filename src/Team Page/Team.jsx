import React from 'react'
import './Team.css'
import TeamCard from '../Components/TeamCard'

const Team = () => {
  return (
    <div>
      <div className="title"><span>OUR </span><span className="inline">TEAM</span></div>
      <div>
        <div className="year-title">Members from Fourth Year : </div>
        <TeamCard />
   
      </div>
      <div>
        <div className="year-title">Members from Third Year : </div>
        <TeamCard />
   
      </div>
      <div>
        <div className="year-title">Members from Second Year : </div>
        <TeamCard />
      </div>
    </div>
  )
}

export default Team