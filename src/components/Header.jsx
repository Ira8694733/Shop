import React from 'react';
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

const Header = () => {
    const cartItems = useSelector((state)=> state.basket.basketItems);
    const totalItems = cartItems?.reduce((acc, item)=> acc += item.quantity, 0)

    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container px-4 px-lg-5">
                        <img width={40} height={40} src="img/robot.png"/>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation"><span
                            className="navbar-toggler-icon"></span></button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <nav className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                                <Link  to={'/'} className="nav-item nav-link active">All products</Link>
                                <Link  to={'/Laptops'} className="nav-item nav-link active">Laptops</Link>
                                <Link  to={'/Smartphones'} className="nav-item nav-link active">Smartphones</Link>
                            </nav>
                            <form className="d-flex">
                                <Link to={'/cart/'}>
                                <button className="btn btn-outline-dark"  type="submit" id="buttoncart">
                                    <i className="bi-cart-fill me-1"></i>
                                    Cart
                                    <span className="badge bg-dark text-white ms-1 rounded-pill">
                                        {/*{cartItems.length}*/}
                                        {totalItems}
                                    </span>
                                </button>
                                    </Link>
                            </form>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header;