import React from 'react';

export default function DataField(props){
    return (
        <span>{ props.data ? props.data : "unavailable" }</span>
    );
}