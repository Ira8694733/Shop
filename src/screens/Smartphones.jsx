import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {useGetAllProductsQuery} from "../store/api/products";

import Header from "../components/Header";
import Slider from "../components/Slider";
import Card from "../components/Card/Card";
import Footer from "../components/Footer";


const Smartphones = () => {

    const {products} = useSelector(state => state.products);
    const {error, loading} = useGetAllProductsQuery();
    const [smartphones, setSmartphones] = useState();

    const filterSmartphones = () => {
        let category = products?.filter(el => el.category === 'smartphones');
        setSmartphones(category);
    }

    useEffect(()=> {
        filterSmartphones();
    },[error, loading])

    return (
        <>
            <Header/>
            <Slider/>
            {/*                        <Card id={item.id} key={item.id} thumbnail={item.thumbnail} price={item.price} title={item.title} product={item}/>*/}
             <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    {
                        smartphones?.map(item => {
                            return(
                                <Card id={item?.id} key={`smartphone${item?.id}`} thumbnail={item?.thumbnail} price={item?.price} title={item?.title} product={item}/>
                            )
                        })
                    }
                </div>
            </div>
            <Footer/>
        </>
    );
};


export default Smartphones;
