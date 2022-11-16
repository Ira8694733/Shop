import React from "react";
import { useSelector } from "react-redux";
import {Link} from "react-router-dom";

import Header from "../components/Header";
import Card from "../components/CardCart/CardCart";

function Cart() {
    const cartItems = useSelector((state)=> state.basket.basketItems);


    return (
        <>
            <Header />
            <section className="section-js hidden py-5 bg-light">
                <div className="container px-4 px-lg-5 mt-5" style={{minHeight:"41vh"}}>
                    {!cartItems.length && <div className="empty-cart"><span>Your cart is empty. <Link className="not-found_link" to="/">Return to page All products</Link></span></div>}
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
        </>
    );
}

export default Cart;