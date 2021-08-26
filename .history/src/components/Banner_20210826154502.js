import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function Banner() {
    return (
        <div className="relative">
            <div className="absolute w-full h-32 bg-gradient"/>
                <Carousel
                autoPlay
                infiniteLoop
                showIndicators={false}
                showThumbs={true}
                interval={2000}
                showStatus={false}>
                <div><img src="https://links.papareact.com/gi1" loading="lazy" /></div>
                <div><img src="https://links.papareact.com/6ff" loading="lazy" /></div>
                <div><img src="https://links.papareact.com/7ma" loading="lazy" /></div>
            </Carousel>
        </div>
    )
}

export default Banner
