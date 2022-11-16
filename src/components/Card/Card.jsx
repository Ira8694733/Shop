import React from "react";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {addToCart} from "../../store/slice/cart";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./Card.css";

import getRating from "../Ratings"

const Card = ({product}) => {

    const discountPrice = product?.price - (product?.price / 100 * product?.discountPercentage);

    const dispatch = useDispatch()

//add to cart
    const handleClick = () => {
        dispatch(addToCart(product))
    };

    return (

            <div className="col mb-5">
            <div className="card h-600">
                <Link to={`/${product?.id}`} >
                <img className="card-img-top" src={product?.thumbnail} alt="product"/>
                </Link>
                <div className="card-body p-4" >
                    <div className="text-center">
                        <h5 className="fw-bolder"></h5>
                        {product?.title}
                        <div className="d-flex justify-content-center small text-warning mb-2">
                        </div>
                        <div className="d-flex justify-content-center small text-warning mb-2">
                            {getRating(product)}
                        </div>
                        <span className="text-decoration-line-through ">{product?.price} $ </span>
                        <span  className="current-price"> {discountPrice.toFixed(0)} $</span>
                    </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center card__btn">

                        <button
                            type="button"
                            className="btn btn-outline-dark mt-auto add-basket" onClick={handleClick}>
                            Add to cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
          );
};

export default Card