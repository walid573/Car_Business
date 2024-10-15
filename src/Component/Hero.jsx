import  Carousel  from 'react-bootstrap/Carousel'
import React from 'react'

function Hero() {
  return (
    <>
        <Carousel data-bs-theme="dark" indicators={false} >
            <Carousel.Item>
                <div className='text-center HeraArea'>
                    <p className='mt-5 BrandColor'>Meet your new car</p>
                    <h1 className='font-weight-bold'>Honda Civic Type R</h1>
                    <div className='HeroButton'>
                    <button className='btn btn-outline-secondary font-weight-bold me-3'>More Details</button>
                    <button className='btn btn-primary font-weight-bold textDrive'>Test Drive</button>
                    </div>
                </div>
                <div className='HeroImg'>
                    <img className='d-block w-100' src="Img/Header Image.png" alt="" />
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className='text-center HeraArea'>
                    <p className='mt-5 BrandColor'>Join your new car</p>
                    <h1 className='font-weight-bold'>TOYOTA CHR</h1>
                    <div className='HeroButton'>
                    <button className='btn btn-outline-secondary font-weight-bold me-3'>More Details</button>
                    <button className='btn btn-primary font-weight-bold textDrive'>Test Drive</button>
                    </div>
                </div>
                <div className='HeroImg'>
                    <img className='d-block w-100' src="Img/Header Image.png" alt="" />
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className='text-center HeraArea'>
                    <p className='mt-5 BrandColor'>Hire Us for your new car</p>
                    <h1 className='font-weight-bold'>Ford</h1>
                    <div className='HeroButton'>
                    <button className='btn btn-outline-secondary font-weight-bold me-3'>More Details</button>
                    <button className='btn btn-primary font-weight-bold textDrive'>Test Drive</button>
                    </div>
                </div>
                <div className='HeroImg'>
                    <img className='d-block w-100' src="Img/Header Image.png" alt="" />
                </div>
            </Carousel.Item>
        </Carousel>
    </>
  )
}

export default Hero