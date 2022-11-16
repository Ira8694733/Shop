import React from 'react';
import {Link} from "react-router-dom";
import "./NotFoundBlock.css"

const NotFoundBlock = () => {
    return (
        <>
            <div className="not-found">
                <img src="https://miro.medium.com/max/1100/1*DeBkx8vjbumpCO-ZkPE9Cw.png"/>
            </div>
            <div className="not-found">
                <Link className="not-found_link" to="/">GO HOME</Link>
            </div>
        </>
    );
};

export default NotFoundBlock;