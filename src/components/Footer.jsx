import React from 'react';
import {MDBFooter} from 'mdb-react-ui-kit';

const Footer = () =>{
    return (
        <MDBFooter className='navbar-light bg-light'>
            <div className='text-center p-3' >
                © 2020 Copyright:
                <span className='text-center p-3'>
                  ROBOTECH
                </span>
            </div>
        </MDBFooter>
    );
}

export default Footer;