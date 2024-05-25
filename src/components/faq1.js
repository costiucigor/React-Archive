import React from 'react'

import PropTypes from 'prop-types'

import './faq1.css'

const FAQ1 = (props) => {
  return (
    <div className="faq1-faq7 thq-section-padding">
      <div className="faq1-max-width thq-section-max-width">
        <div className="thq-flex-column">
          <h2 className="thq-heading-2">{props.heading1}</h2>
          <p className="faq1-text1 thq-body-large">{props.content1}</p>
        </div>
        <div className="thq-flex-column faq1-list">
          <div className="faq1-list-item1">
            <p className="faq1-faq1-question thq-body-large">
              {props.faq1Question}
            </p>
            <span className="thq-body-small">{props.faq1Answer}</span>
          </div>
          <div className="faq1-list-item2">
            <p className="faq1-faq2-question thq-body-large">
              {props.faq2Question}
            </p>
            <span className="thq-body-small">{props.faq2Answer}</span>
          </div>
          <div className="faq1-list-item3">
            <p className="faq1-faq3-question thq-body-large">
              {props.faq3Question}
            </p>
            <span className="thq-body-small">{props.faq3Answer}</span>
          </div>
          <div className="faq1-list-item4">
            <p className="faq1-faq4-question thq-body-large">
              {props.faq4Question}
            </p>
            <span className="thq-body-small">{props.faq4Answer}</span>
          </div>
          <div className="faq1-list-item5">
            <p className="faq1-faq5-question thq-body-large">
              {props.faq5Question}
            </p>
            <span className="thq-body-small">{props.faq5Answer}</span>
          </div>
        </div>
        <div className="thq-flex-column">
          <div className="faq1-content1">
            <h2 className="thq-heading-2">{props.heading2}</h2>
            <p className="faq1-text3 thq-body-large">{props.content2}</p>
          </div>
          <div className="faq1-container">
            <button className="thq-button-outline faq1-button">
              <span className="thq-body-small">{props.action1}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

FAQ1.defaultProps = {
  faq5Question: 'How long does it take to complete a bathroom project?',
  faq1Answer:
    'We offer a wide range of bathroom products including sinks, faucets, showers, bathtubs, toilets, and more.',
  action1: 'Contact',
  faq3Question:
    'What is the process for building a bathroom with your company?',
  faq2Answer:
    'Yes, we have a team of experienced designers who can help you create the perfect bathroom design tailored to your preferences.',
  faq3Answer:
    'Our process involves an initial consultation to discuss your requirements, followed by design planning, product selection, and finally the construction phase.',
  heading2: 'Still have a question?',
  content2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
  faq5Answer:
    'The timeline for completing a bathroom project can vary depending on the scope of work involved, but our team works efficiently to deliver high-quality results in a timely manner.',
  heading1: 'Frequently Asked Questions',
  faq4Question: 'Can I customize the products in my bathroom?',
  faq2Question: 'Do you provide bathroom design services?',
  faq1Question: 'What bathroom products do you offer?',
  faq4Answer:
    'Yes, we offer customization options for many of our products to ensure they fit seamlessly into your desired design.',
  content1:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
}

FAQ1.propTypes = {
  faq5Question: PropTypes.string,
  faq1Answer: PropTypes.string,
  action1: PropTypes.string,
  faq3Question: PropTypes.string,
  faq2Answer: PropTypes.string,
  faq3Answer: PropTypes.string,
  heading2: PropTypes.string,
  content2: PropTypes.string,
  faq5Answer: PropTypes.string,
  heading1: PropTypes.string,
  faq4Question: PropTypes.string,
  faq2Question: PropTypes.string,
  faq1Question: PropTypes.string,
  faq4Answer: PropTypes.string,
  content1: PropTypes.string,
}

export default FAQ1
