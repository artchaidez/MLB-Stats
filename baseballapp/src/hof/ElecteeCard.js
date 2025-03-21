import React from 'react'

const ElecteeCard = ({data}) => {
  return (
    <div className="electee-div">
      <img
        className="electee-image"
        src={data.img}
        alt={`${data.name}-photo`}
      />
      <div className="player">
        <h2>{data.name}</h2>
        <h3>{data.position}</h3>
      </div>
    </div>
    
  )
}

export default ElecteeCard
