import React from 'react'

import PropTypes from 'prop-types'

import './gallery1.css'

const Gallery1 = (props) => {
  return (
    <div className="gallery1-gallery3 thq-section-padding">
      <div className="gallery1-max-width thq-section-max-width">
        <div className="gallery1-section-title">
          <h2 className="gallery1-text thq-heading-2">{props.heading1}</h2>
          <span className="gallery1-text1 thq-body-large">
            {props.content1}
          </span>
        </div>
        <div
          data-thq="slider"
          data-pagination="true"
          data-navigation="true"
          data-autoplay="true"
          className="gallery1-slider swiper"
        >
          <div data-thq="slider-wrapper" className="swiper-wrapper">
            <div
              data-thq="slider-slide"
              className="gallery1-slider-slide swiper-slide"
            ></div>
            <div
              data-thq="slider-slide"
              className="gallery1-slider-slide1 swiper-slide"
            ></div>
            <div
              data-thq="slider-slide"
              className="gallery1-slider-slide2 swiper-slide"
            ></div>
          </div>
          <div
            data-thq="slider-pagination"
            className="gallery1-slider-pagination swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal"
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
            className="gallery1-slider-button-prev swiper-button-prev"
          ></div>
          <div
            data-thq="slider-button-next"
            className="gallery1-slider-button-next swiper-button-next"
          ></div>
        </div>
        <div className="gallery1-content"></div>
      </div>
    </div>
  )
}

Gallery1.defaultProps = {
  image2Alt: 'Modern Bathroom Design 2',
  heading1: 'Modern Bathroom Designs',
  image3Src:
    'https://images.unsplash.com/photo-1515191107209-c28698631303?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNjYyMTY1MXw&ixlib=rb-4.0.3&q=80&w=1080',
  image1Alt: 'Modern Bathroom Design 1',
  image1Src:
    'https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNjYyMTY1MXw&ixlib=rb-4.0.3&q=80&w=1080',
  image2Src:
    'https://images.unsplash.com/photo-1515938541268-cb8a388444b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNjYyMTY1MXw&ixlib=rb-4.0.3&q=80&w=1080',
  image3Alt: 'Modern Bathroom Design 3',
  content1:
    'Explore our gallery of modern bathroom designs to get inspiration for your next project.',
  imageSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
  imageAlt: 'image',
}

Gallery1.propTypes = {
  image2Alt: PropTypes.string,
  heading1: PropTypes.string,
  image3Src: PropTypes.string,
  image1Alt: PropTypes.string,
  image1Src: PropTypes.string,
  image2Src: PropTypes.string,
  image3Alt: PropTypes.string,
  content1: PropTypes.string,
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
}

export default Gallery1
