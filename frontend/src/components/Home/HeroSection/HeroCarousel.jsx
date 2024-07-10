import React from 'react'
import { Carousel, Image } from 'antd'
import { heroCarouselInfo } from '../../../constant'

const contentStyle = {
    margin: 0,
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
}

const HeroCarousel = () => {

    const onChange = (currentSlide) => {
    }
    return (
        <div className='w-100 h-100' style={{ zIndex: '-1', position: 'absolute' }}>
            <Carousel afterChange={onChange} autoplay>
                {heroCarouselInfo.map((img, index) => (
                    <div key={index}>
                        <div className='carouselImg' style={{ backgroundImage: `url(${img})` }} >
                        </div>
                    </div>
                ))}

            </Carousel>
        </div>
    )
}
export default HeroCarousel