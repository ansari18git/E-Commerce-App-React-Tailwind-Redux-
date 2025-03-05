import React, { useEffect, useState } from 'react'
import { Swiper,SwiperSlide } from 'swiper/react'
import 'swiper/css';
import { Link } from 'react-router-dom';
import { Autoplay } from 'swiper/modules';
const HeroSlider = () => {
    const [slides,setSlides] = useState([]);

    useEffect(()=>{
        fetch('./img/Hero_Slider/slider.json')
        .then(response=>response.json())
        .then(data=>setSlides(data.heroSlider))
        .catch(error=>console.log('Error:',error));

        console.log(slides);
        
    },[]);


  return (
    <div className='w-full'>
         <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        navigation={true}
        className="mySwiper"
      >
        {slides.length > 0 && slides.map((slide)=>(
        <SwiperSlide key={slide.id} className='max-h-[90vh] relative'>
            <img src={slide.image} alt={`Slide`+slide.id}/>
            <div className="text_container absolute sm:top-[40%] top-[15%] text-center w-full h-full px-2">
                <h1 className='font-bold md:text-5xl sm:text-2xl text-xl text-slate-800'>{slide.title}</h1>
                <p className='text-sm italic md:py-3 py-1 text-gray-100'>{slide.subtitle}</p>
                <Link to={slide.link}>
                <button className='font-bold bg-lime-400 md:px-5 px-3 md:text-sm text-xs md:py-3 py-1 hover:bg-lime-600 transition ease-in duration-200'>
                    {slide.buttonText}
                </button>
                </Link>
              
            </div>
        </SwiperSlide>
        ))}
       
      </Swiper>
    </div>
  )
}

export default HeroSlider