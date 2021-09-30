import React from "react";
import FeatherIcon from 'feather-icons-react';

export default function StatusBar(){
    return (
        <div className="statusBar">
            <ul>
                <li><FeatherIcon icon="wifi" /></li>
                <li><FeatherIcon icon="battery" /></li>
                <li><span>12:30</span></li>
            </ul>
        </div>
    );
}