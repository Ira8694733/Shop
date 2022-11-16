import React from 'react';
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {addToCart} from "../../store/slice/cart";

const CardProduct = (product) => {
const discountPrice = product?.price - (product?.price / 100 * product?.discountPercentage);

    const dispatch = useDispatch()

//add to cart
    const handleClick = () => {
        dispatch(addToCart(product))
    };

    console.log (product)
    return (
        <>
                <section className="py-5">
                    <div className="container px-4 px-lg-5 my-5">
                        <div className="js-row row gx-4 gx-lg-5 align-items-center">
                            <div className='col-md-6'>
                                <img src={product?.thumbnail}/>
                            </div>
                            <div className='col-md-6'>
                                <div className="small mb-1">Code:{product?.id}</div>
                                <h1 className="display-5 fw-bolder">{product?.title}</h1>
                                <div className="fs-5 mb-5">
                                    <span className="text-decoration-line-through">{product?.price}$</span>
                                    <span className="current-price">{discountPrice.toFixed(0)}$</span>
                                </div>
                                <p className="lead">{product?.description}</p>
                                <div className="d-flex">
                                        <div className="text-center">
                                            <a className="btn btn-outline-dark mt-auto" onClick={handleClick}>
                                                Add to cart</a>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
        </>
    );
};

export default CardProduct;