import ImageSlider from "./Slider";

const slidesHeader = () => {
    const slides = [
        { url: "img/image-1.jpg", title: "beach" },
        { url: "img/image-2.jpg", title: "boat" },
        { url: "img/image-3.jpg", title: "forest" },
        { url: "img/image-4.jpg", title: "city" },
        { url: "img/image-5.jpg", title: "italy" },
    ];
    const containerStyles = {
        width: "100%",
        height: "280px",
        margin: "0 auto",
    };
    return (
        <>
        <div>
            <h4>The coolest devices for you</h4>
            <div style= {containerStyles}>
                <ImageSlider slides={slides} />
            </div>
        </div>
        </>
    );
};

export default slidesHeader;