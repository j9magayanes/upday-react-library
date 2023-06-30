import React from 'react';
import './text.css';


export const Text = ({args, props}) => {
        return (
            <div className={props.div}>
                <h1 className={props.h1}>{props.text}</h1>
            </div>)}