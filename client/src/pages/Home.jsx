import React from 'react'
import Hero from '../componts/Hero/Hero'
import FeaturedDestination from '../componts/featuredDestination/FeaturedDestination'
import ExclusiveOffer from './../componts/exclusiveOffers/ExclusiveOffer';
import Testimonial from './../componts/Testimonial/Testimonial';
import NewsLetter from './../componts/newsLetter/NewsLetter';

const Home = () => {
  return (
    <>
        <Hero/>
        <FeaturedDestination/>
        <ExclusiveOffer/>
        <Testimonial/>
        <NewsLetter/>
    </>
  )
}

export default Home