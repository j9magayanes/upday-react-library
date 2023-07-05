import React from 'react';
import './share.css';


export const Share = ({args}) => {
        return (
            <div className="page">
            <article>
            <div className="padded-lr legal">
                <h1 id="imprint">{args.detail}</h1>
            </div>
            </article>
            </div>)}