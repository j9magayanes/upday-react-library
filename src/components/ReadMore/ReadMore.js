import React from 'react';
import './readmore.css';


export const ReadMore= ({args}) => {
        return (
            <div className="page">
            <article>
            <div className="padded-lr legal">
                <h1 id="imprint">{args.detail}</h1>
            </div>
            </article>
            </div>)}