import React from 'react';
import Card from './Card'
import '../css/Home.css';
import CareInNumbers from './CareInNumbers';
import InsurancePraviders from './InsurancePraviders';
import Footer from './Footer';

const Home = () => {
  return (
    <div className='home'>
      <div className="overlay"></div>
      <div className='homeContent'>
        <div className="homeText">Welcome, Sam!</div>
        <div className='homeCard'>
          <Card img={'doctor.png'} title={"Appoinment"} children={""} />
          <Card img={'medicine.png'} title={"Medicine"} children={""} />
          <Card img={'blood-test.png'} title={"Lab Result"} children={""} />
          <Card img={'life-insurance.png'} title={"Insurance"} children={""} />
        </div>
      </div>
      <CareInNumbers/>
      <InsurancePraviders/>
      <Footer/>
    </div>
  )
}

export default Home
