import { Carousel } from "react-responsive-carousel";

function Banner() {
    return (
        <div className="relative">
            <Carousel
                autoPlay
                infiniteLoop
                showIndicators={false}
                showThumbs={true}
            interval={5000}>
<div></div>
<div></div>
<div></div>
            </Carousel>
        </div>
    )
}

export default Banner
