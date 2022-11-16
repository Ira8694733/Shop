import React, {useEffect} from 'react';
import {useSelector} from "react-redux";
import {useGetAllProductsQuery} from "../store/api/products";

import Card from "../components/Card/Card";
import Header from "../components/Header";
import Slider from "../components/Slider";
import Footer from "../components/Footer";

const Home = () => {
    const {products} = useSelector(state => state.products);

    const {error, loading} = useGetAllProductsQuery();

    useEffect(() => {
        console.log({error, loading})
    }, [error, loading])

    return (
        <>
            <Header/>
            <Slider/>
            {!products.length && <p> No products </p>}
            {!!products.length &&
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    {
                        products?.map(item => {
                            return(
                                <Card id={item?.id}
                                      key={item?.id}
                                      thumbnail={item?.thumbnail}
                                      price={item?.price}
                                      title={item?.title}
                                      product={item}/>
                            )
                        })
                    }
                </div>
            </div>
            }
            <Footer/>
        </>
    );
};

export default Home;