import React from "react";
import { useSelector } from "react-redux";
import {Link} from "react-router-dom";

import Header from "../components/Header";
import Card from "../components/CardCart/CardCart";
import Footer from "../components/Footer";

const Cart = () => {
    const cartItems = useSelector((state)=> state.basket.basketItems);

    return (
        <>
            <Header />
            <section className="section-js hidden py-5 bg-light">
                <div className="container px-4 px-lg-5 mt-5" style={{minHeight:"41vh"}}>
                    {!cartItems.length &&
                    <div style={{fontSize: "22px", display: "flex", gap: "20px", justifyContent: "center"}}>
                        <span>YOUR CART IS EMPTY</span>
                    <Link className="not-found_link" to="/">
                        <button
                             type="button"
                             className="btn btn-outline-dark mt-auto add-basket">
                             ALL PRODUCTS
                        </button>
                    </Link>
                </div>}
                    {cartItems?.map((product, index) => {
                        return (
                            <Card
                                key={`shopping-cart${index}`}
                                thumbnail={product?.thumbnail}
                                title={product?.title}
                                price={product?.price}
                                discountPercentage={product?.discountPercentage}
                                quantity={product?.quantity}
                                id={product?.id}
                                product={product}
                            />
                        );
                    })}
                    <div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    );
}

export default Cart;