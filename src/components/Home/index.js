import React from 'react'
import './index.css'
import Product from '../Product/index'

const testTitle = 'Test Item';
const testImg = 'https://www.ondemandcmo.com/wp-content/uploads/2016/03/canstockphoto22402523-arcos-creator.com_-1024x1024.jpg'
const testPrice = 19.99;
const testRating = 5;

const index = () => {
  return (
    <div className='home'>
        <div className='home-container'>
            <img className='home-image' src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg' alt='' />
            <div className='home-row'>
                <Product title={testTitle} image={testImg} price={testPrice} rating={testRating} />
                <Product title={testTitle} image={testImg} price={testPrice} rating={testRating} />
            </div>
            <div className='home-row'>
                <Product title={testTitle} image={testImg} price={testPrice} rating={testRating} />
                <Product title={testTitle} image={testImg} price={testPrice} rating={testRating} />
                <Product title={testTitle} image={testImg} price={testPrice} rating={testRating} />
            </div>
            <div className='home-row'>
                <Product title={testTitle} image={testImg} price={testPrice} rating={testRating} />
            </div>
        </div>
    </div>
  )
}

export default index