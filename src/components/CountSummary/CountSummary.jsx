import React from 'react';
import "./CountSummary.css";
import {home} from "../../assets/assets.js";
const CountSummary = () => {
  return (
    <div className='row'>
      <ul>
        <li>
            <div className="component">
                <div className="left">
                    <p>40+</p>
                </div>
                <div className="right">
                    <p>Github Repos</p>
                </div>
            </div>
        </li>
        <li>
            <div className="component2">
                <div className="left">
                    <p>2K+</p>
                </div>
                <div className="right">
                    <p>Coding Problems</p>
                </div>
                
            </div>
        </li>
        <li>
        <div className="component2">
                <div className="left">
                    <p>7</p>
                </div>
                <div className="right">
                    <p>Hackathon Wins</p>
                </div>
               
        </div>
        </li>
        <li>
         
                <div className="component2">
                <div className="left">
                    <p>2</p>
                </div>
                <div className="right">
                    <p>Mobile Apps on PlayStore</p>
                </div>
    
            </div>
        </li>
        
      </ul>
    </div>
  )
}
export default CountSummary;
