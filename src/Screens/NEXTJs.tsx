import React from 'react'
import ResponsiveAppBar from '../components/AppBar'
import FirstStage from '../components/FirstStage'
import SecondStage from '../components/SecondStage'

const NEXTJs: React.FC = () => {
  return (
    <div>
      <ResponsiveAppBar />
     <FirstStage />
     <SecondStage />
    </div>
  )
}

export default NEXTJs
