import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar4 from '../components/navbar4'
import Hero3 from '../components/hero3'
import Gallery1 from '../components/gallery1'
import Features17 from '../components/features17'
import Features18 from '../components/features18'
import Features171 from '../components/features171'
import CTA1 from '../components/cta1'
import FAQ1 from '../components/faq1'
import Contact4 from '../components/contact4'
import Footer15 from '../components/footer15'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>NicaBT</title>
        <meta property="og:title" content="NicaBT" />
      </Helmet>
      <div className="home-navbar1">
        <Navbar4></Navbar4>
      </div>
      <div className="home-hero2">
        <Hero3></Hero3>
      </div>
      <div className="home-logos3">
        <div
          data-thq="slider"
          data-pagination="true"
          data-navigation="true"
          className="home-slider swiper"
        >
          <div data-thq="slider-wrapper" className="swiper-wrapper">
            <div
              data-thq="slider-slide"
              className="home-slider-slide swiper-slide"
            ></div>
            <div
              data-thq="slider-slide"
              className="home-slider-slide1 swiper-slide"
            ></div>
            <div
              data-thq="slider-slide"
              className="home-slider-slide2 swiper-slide"
            ></div>
          </div>
          <div
            data-thq="slider-pagination"
            className="home-slider-pagination swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal"
          >
            <div
              data-thq="slider-pagination-bullet"
              className="swiper-pagination-bullet swiper-pagination-bullet-active"
            ></div>
            <div
              data-thq="slider-pagination-bullet"
              className="swiper-pagination-bullet"
            ></div>
            <div
              data-thq="slider-pagination-bullet"
              className="swiper-pagination-bullet"
            ></div>
          </div>
          <div
            data-thq="slider-button-prev"
            className="swiper-button-prev"
          ></div>
          <div
            data-thq="slider-button-next"
            className="swiper-button-next"
          ></div>
        </div>
      </div>
      <div className="home-gallery4">
        <Gallery1></Gallery1>
      </div>
      <div className="home-features5">
        <Features17></Features17>
      </div>
      <div className="home-features6">
        <Features18></Features18>
      </div>
      <div className="home-features7">
        <Features171></Features171>
      </div>
      <div className="home-cta8">
        <CTA1></CTA1>
      </div>
      <div className="home-faq9">
        <FAQ1></FAQ1>
      </div>
      <div className="home-contact10">
        <Contact4></Contact4>
      </div>
      <div className="home-footer11">
        <Footer15></Footer15>
      </div>
    </div>
  )
}

export default Home
