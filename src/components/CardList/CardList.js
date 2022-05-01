import React from "react";

import data from "../../data/data";
import Card from "./Card/Card";

export default function CardList(){
    const generateCard = (cardData, index) => {
        const card = <Card key={cardData.title} {...cardData} />  

        if (data.length - 1 == index){
            return card;
        }

        return (
            <>
                {card}
                <hr />
            </>
        )
    }
    
    return (
        <div className="cardlist">
            {data.map(generateCard)}
        </div>
    )
}