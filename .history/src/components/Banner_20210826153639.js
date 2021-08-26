import { Carousel } from "react-responsive-carousel";

function Banner() {
    return (
        <div className="relative">
            <Carousel
                autoPlay
                infiniteLoop
            showIndicators>
<div></div>
<div></div>
<div></div>
            </Carousel>
        </div>
    )
}

export default Banner
