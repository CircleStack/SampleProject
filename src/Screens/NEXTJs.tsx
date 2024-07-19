import React from 'react'
import ResponsiveAppBar from '../components/AppBar'
import FirstStage from '../components/FirstStage'
import SecondStage from '../components/SecondStage'
import GetStartedSection from '../components/GetStarted';
import Framework from '../components/FrameWork';
import Footer from '../components/Footer';
import FoundationTitle from '../components/Foundation';

const NEXTJs: React.FC = () => {
  return (
    <>

      <ResponsiveAppBar />
      <FirstStage />
      <SecondStage />
      <FoundationTitle />
      <GetStartedSection />
      <Framework />
      <Footer />
    </>
  )
}

export default NEXTJs;
