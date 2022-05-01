import React from "react";  
import PropTypes from "prop-types";

import CardInfo from "./CardInfo/CardInfo";

export default function Card({imageUrl, ...props}){
    return (
        <div data-testid="card" className="card">
            <img className="card--image" src={imageUrl}/>
            <CardInfo {...props} />
        </div>
    )
}

CardInfo.propTypes = {
    imageUrl: PropTypes.string,
    location: PropTypes.string,
    title: PropTypes.string,
    startDate: PropTypes.string,
    endDate: PropTypes.string,
    description: PropTypes.string,
    googleMapsUrl: PropTypes.string
}