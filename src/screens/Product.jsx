import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import Header from "../components/Header";
import CardProduct from "../components/CardProduct/CardProduct";
import Card from "../components/Card/Card";
import Slider from "../components/Slider";
import Footer from "../components/Footer";

const Product = () => {

    const params = useParams()

    const [product, setProduct] = useState (null);
    const [relevant, setRelevant] = useState(null);

    useEffect(() => {
        if(params?.id) {
            fetch(`https://dummyjson.com/products/${params.id}`)
            .then(response => response.json())
            .then(data  => setProduct(data));
        };

    }, [])


    const relatedProducts = () => {
        let tempVar = new Object(product);
        fetch(`https://dummyjson.com/products/category/${tempVar.category}`)
            .then((response) => response.json())
            .then((data) => data.products.filter((item) => item.id !== tempVar.id)?.splice(0,3))
            .then((filtered) => setRelevant(filtered));
    };


    useEffect(() => {
        relatedProducts();
    }, [product]);

    return (
        <>
            <Header/>
            <Slider/>
                <CardProduct
                    thumbnail={product?.thumbnail}
                    price={product?.price}
                    title={product?.title}
                    description={product?.description}
                    discountPercentage = {product?.discountPercentage}
                    id={product?.id}
                    key={`product${product?.id}`}
                />
                <section className="py-5 bg-light">
                    <div className="container px-4 px-lg-5 mt-5">
                        <h2 className="text-center">Related products</h2>
                            <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                            {relevant?.map((item) => {
                                return (
                                    <Card id={item?.id}
                                          key={`relevant${item.id}`}
                                          thumbnail={item?.thumbnail}
                                          price={item?.price}
                                          title={item?.title}
                                          product={item}/>
                                );
                            })}
                            </div>
                    </div>
                </section>
            <Footer/>
        </>
    );
};

export default Product;