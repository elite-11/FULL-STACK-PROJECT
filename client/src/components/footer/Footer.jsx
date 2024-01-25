import React from 'react'
import classes from './footer.module.css'

const Footer = () => {
  return (
    <footer>
      <div className={classes.wrapper}>
        <div className={classes.col}>
          <h2>About the App</h2>
          <p>
          Real estate apps help buyers, sellers, realtors, landlords, and investors find each other. They provide a convenient platform for searching for properties, viewing property details, and connecting with real estate professionals.
          </p>
        </div>
        <div className={classes.col}>
          <h2>Contacts</h2>
          <span>Phone: 9466985967</span>
          <span>YouTube:RH </span>
          <span>GitHub: RH@11</span>
        </div>
        <div className={classes.col}>
          <h2>Location</h2>
          <span>Continent: Asia</span>
          <span>Country: India</span>
          <span>Current Location: Rajpura</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer