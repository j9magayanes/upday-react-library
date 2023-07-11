import React from 'react';
import './share.css';



export const Share = ({args}) => {
        return (
            <div className="shareDiv">
                <p className="articleText">Artikel teilen</p>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className='shareIcon'><rect width="32" height="32" rx="16" fill="current"></rect><path fill-rule="evenodd" clip-rule="evenodd" d="M21.3333 13.3333C22.8061 13.3333 24 12.1394 24 10.6667C24 9.19391 22.8061 8 21.3333 8C19.8606 8 18.6667 9.19391 18.6667 10.6667C18.6667 10.8583 18.6869 11.0452 18.7253 11.2253L12.6779 14.249C12.1891 13.6879 11.4693 13.3334 10.6667 13.3334C9.19391 13.3334 8 14.5273 8 16C8 17.4728 9.19391 18.6667 10.6667 18.6667C11.4693 18.6667 12.1891 18.3121 12.678 17.751L18.7253 20.7747C18.6869 20.9548 18.6667 21.1417 18.6667 21.3333C18.6667 22.8061 19.8606 24 21.3333 24C22.8061 24 24 22.8061 24 21.3333C24 19.8606 22.8061 18.6667 21.3333 18.6667C20.5307 18.6667 19.8109 19.0213 19.322 19.5823L13.2747 16.5587C13.3131 16.3785 13.3333 16.1916 13.3333 16C13.3333 15.8084 13.3131 15.6215 13.2747 15.4413L19.322 12.4177C19.8109 12.9787 20.5307 13.3333 21.3333 13.3333ZM21.3333 12C22.0697 12 22.6667 11.4031 22.6667 10.6667C22.6667 9.93029 22.0697 9.33333 21.3333 9.33333C20.597 9.33333 20 9.93029 20 10.6667C20 11.4031 20.597 12 21.3333 12ZM12 16C12 16.7364 11.403 17.3334 10.6667 17.3334C9.93029 17.3334 9.33333 16.7364 9.33333 16C9.33333 15.2636 9.93029 14.6667 10.6667 14.6667C11.403 14.6667 12 15.2636 12 16ZM22.6667 21.3333C22.6667 22.0697 22.0697 22.6667 21.3333 22.6667C20.597 22.6667 20 22.0697 20 21.3333C20 20.5969 20.597 20 21.3333 20C22.0697 20 22.6667 20.5969 22.6667 21.3333Z" className='share'></path></svg>
            </div>)}