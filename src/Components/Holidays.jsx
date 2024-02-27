import React from 'react'
import Slider from 'react-slick';

import frame from "../assets/frame.jpg"




function Holidays() {


    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Slides desktop par
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2, // Slides tablet par
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1, // Slides mobile par
            }
          }
        ]
      };



  return (

<div className='overflow-hidden'>

<h1 className='font-bold text-base sm:text-xl p-5'> Recommended Holidays</h1>

<Slider {...settings} className='px-5 gap-2 outline-none'>
  <div className=' '>
    <img src={frame} className='object-cover w-[90%]' alt="..." />
  </div>
  <div className=''>
    <img src={frame} className='object-cover w-[90%]'  alt="" />
  </div>
  <div className=' '>
    <img src={frame} className='object-cover w-[90%]' alt="" />
  </div>
  <div className=''>
    <img src={frame} className='object-cover w-[90%]' alt="" />
  </div>
  <div className=' '>
    <img src={frame} className='object-cover w-[90%]' alt="" />
  </div>
  
</Slider>




</div>




    )
}

export default Holidays