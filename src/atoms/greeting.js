import React from 'react';

function Greeting() {
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay
    
    const styles = {
    fontSize: 30
    } 
    
    if (hours < 12) {
    timeOfDay = "morning"
    styles.color = "#f5c542"
    } else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon"
    styles.color = "#42f5e3"
    } else {
    timeOfDay = "night"
    styles.color = "#f542e3"
    }
    
    return (
    <h1 style={styles}>Good {timeOfDay}!</h1>
    )
    }
    
    export default Greeting;