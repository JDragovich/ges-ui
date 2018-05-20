import React, { Component } from 'react';
import './Ticker.css';

import TickerItem from './Ticker-Item/Ticker-Item';

class Ticker extends Component {

    generateItems(stocks){
        return stocks.map( stock => {
            return (
                <TickerItem stock={stock} key={stock.name} getEquity={this.props.getEquity} />
            )
        })
    }

    render(){
        return (
            <div className="ticker">
                <div className="tickerslide backTicker">
                    { this.generateItems(this.props.stocks) }
                </div>
                <div className="tickerslide forTicker">
                    { this.generateItems(this.props.stocks) }
                </div>
            </div>
        )
    }
}

export default Ticker;