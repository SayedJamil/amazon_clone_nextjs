
import { Carousel } from "react-responsive-carousel";

function Banner() {
    return (
        <div className="relative">
            <Carousel
                autoPlay
                infiniteLoop
                showIndicators={false}
                showThumbs={true}
                interval={5000}
                showStatus={false}>
                <div><img src="https://links.papareact.com/gi1" loading="lazy"/></div>
                <div><img src="https://links.papareact.com/6ff" loading="lazy" /></div>
                <div><img src="https://links.papareact.com/gi1" loading="lazy" /></div>
            </Carousel>
        </div>
    )
}

export default Banner
