import React, { Component } from 'react';
import './App.css';

import Ticker from './ticker/Ticker';
import CompanyDisplay from './company-display/company-display';


class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      stocks: [],
      selectedEquity : {}
    }

    this.getStocks.bind(this)();
    
    setInterval(this.getStocks.bind(this), 60000);
  }

  apiEndpoint = "https://dev.kwayisi.org/apis/gse/";

  getStocks(){

    fetch(this.apiEndpoint + "live")
      .then(response => response.json())
      .then(json => {
        this.setState({ stocks:json || [] });
      });

  }

  getEquity(name){

    fetch(this.apiEndpoint + `equities/${name}`)
      .then(response => response.json())
      .then(json => {
        this.setState({ selectedEquity:json || {} });
      });

  }

  companyDisplay(){
    if(this.state.selectedEquity.company){
      return <CompanyDisplay company={this.state.selectedEquity.company} />        
    }
    else{
      return (<h5 className="click-here">Click the ticker below for more company information.</h5>);
    }
  }

  render() {
    return (
      <div className="App">
        <div className="header">
          <div className="header-info">
            <h1 className="title"><img src="http://www.countryflags.io/GH/flat/64.png"/> Ghana Stock Exchange</h1>
            <p>Welcome to a simple UI showing the Ghana Stock Excange. beow you can see a running ticker of current stock prices. Clicking on a stock shows more company information.</p>
            <p>This UI uses the <a href="https://dev.kwayisi.org/apis/gse/">GSE API</a>.</p>
            <p className="note"><strong>Note:</strong> Please do not make any financial decisions based on this. It only updates every 10 minutes.</p>
          </div>
          <div className="company-info-wrapper">
            { this.companyDisplay() }
          </div>
        </div>
        <div className="ticker-wrapper">
          <Ticker stocks={this.state.stocks} getEquity={this.getEquity.bind(this)} />  
        </div>
      </div>
    );
  }
}

export default App;
