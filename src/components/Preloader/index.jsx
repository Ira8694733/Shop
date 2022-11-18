import React from 'react'
import Spinner from 'react-bootstrap/Spinner';
import "./Preloader.css"

const Preloader = () =>{
    return (
            <>
                <div className="loader-container">
                    <Spinner animation="border" />
                </div>
            </>
    )
}

export default Preloader;