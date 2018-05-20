import React from 'react';
import './Ticker-Item.css';

export default function TickerItem(props){

    function getArrow(change){
        if(change === 0){
            return;
        }

        return (change < 0 ? <span className="down">▼</span> : <span className="up">▲</span>)
    }

    function getColor(change){
        if(change === 0){
            return;
        }

        return change < 0 ? "down" : "up";
    }

    function handleClick(){
        props.getEquity(props.stock.name)
    }

    return (
        <div className="tickerItem" onClick={ handleClick }>
            <h5>{props.stock.name}</h5>
            <p>{props.stock.price.toFixed(2)}</p>
            <small className={getColor(props.stock.change)}>{props.stock.change.toFixed(2)}&nbsp;{getArrow(props.stock.change)}</small>
        </div>
    )
}