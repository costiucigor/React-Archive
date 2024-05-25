import React from 'react'

import PropTypes from 'prop-types'

import './hero3.css'

const Hero3 = (props) => {
  return (
    <div className="hero3-header9">
      <div
        data-thq="slider"
        data-pagination="true"
        data-navigation="true"
        className="hero3-slider swiper"
      >
        <div data-thq="slider-wrapper" className="swiper-wrapper">
          <div
            data-thq="slider-slide"
            className="hero3-slider-slide swiper-slide"
          ></div>
          <div
            data-thq="slider-slide"
            className="hero3-slider-slide1 swiper-slide"
          ></div>
          <div
            data-thq="slider-slide"
            className="hero3-slider-slide2 swiper-slide"
          ></div>
        </div>
        <div
          data-thq="slider-pagination"
          className="hero3-slider-pagination swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal"
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
        <div data-thq="slider-button-prev" className="swiper-button-prev"></div>
        <div data-thq="slider-button-next" className="swiper-button-next"></div>
      </div>
      <div className="hero3-content thq-section-padding">
        <div className="hero3-max-width thq-section-max-width thq-flex-row">
          <div className="hero3-column">
            <h1 className="thq-heading-1 hero3-text">{props.heading1}</h1>
          </div>
          <div className="hero3-column1">
            <p className="thq-body-large hero3-text1">{props.content1}</p>
            <div className="hero3-actions">
              <button className="thq-button-filled hero3-button">
                <span className="thq-body-small">{props.action1}</span>
              </button>
              <button className="thq-button-outline hero3-button1">
                <span className="thq-body-small">{props.action2}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Hero3.defaultProps = {
  action1: 'Get a Free Quote',
  image1Src:
    'https://images.unsplash.com/photo-1571597438372-540dd352bf41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNjYyMTY1MXw&ixlib=rb-4.0.3&q=80&w=1080',
  heading1: 'Welcome to Our Bathroom Design Company',
  image1Alt: 'Bathroom Design and Build Company',
  action2: 'View Our Services',
  content1: 'Transforming your bathroom into a luxurious retreat',
}

Hero3.propTypes = {
  action1: PropTypes.string,
  image1Src: PropTypes.string,
  heading1: PropTypes.string,
  image1Alt: PropTypes.string,
  action2: PropTypes.string,
  content1: PropTypes.string,
}

export default Hero3
