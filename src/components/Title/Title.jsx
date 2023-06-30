import React from 'react';
import './title.css';


export const Title= ({args}) => {
        return (
            <div className="page">
            <article>
            <div className="padded-lr legal">
                <h1 id="imprint">{args.title}</h1>
            </div>
            </article>
            </div>)}
