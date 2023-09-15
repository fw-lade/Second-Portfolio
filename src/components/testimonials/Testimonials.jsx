import React from 'react'
import './testimonials.css'
import avatar1 from '../../assets/avatar1.jpg'
import avatar2 from '../../assets/avatar2.jpg'
import avatar3 from '../../assets/avatar3.jpg'
import avatar4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const data = [
  {
    avatar : avatar1,
    name : 'Tina Snow',
    review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum quidem earum ipsum, rerum vitae voluptas nemo odit porro quam veniam delectus ut non sequi, dolore quo? Odio nobis incidunt facilis.'
  },
  {
    avatar : avatar2,
    name : 'Barry Allen',
    review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum quidem earum ipsum, rerum vitae voluptas nemo odit porro quam veniam delectus ut non sequi, dolore quo? Odio nobis incidunt facilis.'
  },
  {
    avatar : avatar3,
    name : 'Chris Evans',
    review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum quidem earum ipsum, rerum vitae voluptas nemo odit porro quam veniam delectus ut non sequi, dolore quo? Odio nobis incidunt facilis.'
  },
  {
    avatar : avatar4,
    name : 'Thor Odinson',
    review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum quidem earum ipsum, rerum vitae voluptas nemo odit porro quam veniam delectus ut non sequi, dolore quo? Odio nobis incidunt facilis.'
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}

      >
        {
          data.map(({avatar, name, review}, index) => {
            return(
              <SwiperSlide className="testimonial">
                <div className="client__avatar">
                  <img src={avatar}/>
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className="client__review">{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials