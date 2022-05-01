import React from "react";
import PropTypes from "prop-types";

export default function CardInfo(props){
    const { location, title, startDate, endDate, description, googleMapsUrl } = props;

    const cardInfoLocation = 
        <div className="cardinfo--location">
            <i className="fa-solid fa-location-dot"></i>
            <span>{location.toUpperCase()}</span>
            <a href={googleMapsUrl}>View On Google Maps</a>
        </div>  
        

    const cardInfoMainText =
        <div className="cardinfo--maintext">
            <span className="cardinfo--maintext--date">{startDate} - {endDate}</span>
            <span>{description}</span>
        </div>

    return (
        <div className="cardinfo">
            {cardInfoLocation}
            <h1>{title}</h1>
            {cardInfoMainText}
        </div>
    )
}

CardInfo.propTypes = {
    location: PropTypes.string,
    title: PropTypes.string,
    startDate: PropTypes.string,
    endDate: PropTypes.string,
    description: PropTypes.string,
    googleMapsUrl: PropTypes.string
}