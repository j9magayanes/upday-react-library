import React from 'react';
import './subtitle.css';


export const Subtitle= ({args}) => {
        return (
            <div className="page">
            <article>
            <div className="padded-lr legal">
                <h1 id="imprint">{args.subtitle}</h1>
            </div>
            </article>
            </div>)}
