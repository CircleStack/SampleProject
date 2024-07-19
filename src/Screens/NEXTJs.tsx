import React from 'react';
import GetStartedSection from '../components/GetStarted';
import Framework from '../components/FrameWork';
import Footer from '../components/Footer';
import FoundationTitle from '../components/Foundation';
const NEXTJs: React.FC = () => {
  return (
    <>
     
      <main style={styles.container}>
      <FoundationTitle/>
        <GetStartedSection />
        <Framework />
        <Footer/>
      
      </main>
    </>
  );
};
const styles: { [key: string]: React.CSSProperties } = {
    container: {
        padding: '20px', 
        backgroundColor: 'black', 
        borderRadius: '8px',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
        maxWidth: '1500px', 
        margin: '0 auto',  
        minHeight: '9000px', 
      },
}
export default NEXTJs;
