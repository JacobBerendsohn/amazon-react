import React, { useEffect } from 'react'
import Loader from 'react-loaders'
import './index.css'
import Product from '../Product/index'
import { useResultContext } from '../../context/ResultContextProvider';

const testTitle = 'Test Item';
const testImg = 'https://www.ondemandcmo.com/wp-content/uploads/2016/03/canstockphoto22402523-arcos-creator.com_-1024x1024.jpg'
const testPrice = 19.99;
const testRating = 5;

const Home = () => {

    const { results, isLoading, getResults, searchTerm } = useResultContext();

    useEffect(() => {
        if(searchTerm) {
            getResults(`${searchTerm}`)
        }
      }, [searchTerm]);

    if(isLoading) return (
        <div className='flex justify-center items-center'>
            <Loader type="Rings" color="#00BFFF" height={550} width={80} />
        </div>
      )
  return (
    <div className='home'>
        <div className='home-container'>
            <img className='home-image' src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg' alt='' />
            <div className='home-row'>
                <Product id={1} title={testTitle} image={testImg} price={testPrice} rating={testRating} />
                <Product id={2} title={testTitle} image={testImg} price={testPrice} rating={testRating} />
                <Product id={7} title={testTitle} image={testImg} price={testPrice} rating={testRating} />
            </div>
            <div className='home-row'>
                <Product id={3} title={testTitle} image={testImg} price={testPrice} rating={testRating} />
                <Product id={4} title={testTitle} image={testImg} price={testPrice} rating={testRating} />
                <Product id={5} title={testTitle} image={testImg} price={testPrice} rating={testRating} />
            </div>
            <div className='home-row'>
                <Product id={6} title={testTitle} image={testImg} price={testPrice} rating={testRating} />
            </div>
        </div>
    </div>
  )
}

export default Home