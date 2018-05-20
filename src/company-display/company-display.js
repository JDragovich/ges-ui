import React from 'react';

import DataField from './data-field/data-field';

import "./company-display.css";

export default function CompanyDisplay(props) {
    
    function iterateCompany(company){
        if(!company){
            return;
        }

        return Object.keys(company).map(key => {

            const data = Array.isArray(company[key]) ? 
                                company[key].map(e => `${e.name}(${e.position})`).join(", ") :
                                company[key]
            
            return (
                
                <tr className="info-item" key={key}>
                    <td className="label">{key}:</td><td className="info"><DataField data={ data } /></td>
                </tr>
            )
        })
    }
    
    return (
        <table className="company-info">
            <tbody>
                { iterateCompany(props.company) }
            </tbody>
        </table>
    );
}