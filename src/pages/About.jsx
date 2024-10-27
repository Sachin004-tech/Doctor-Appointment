import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis fuga ad ullam quae dignissimos architecto fugit placeat eveniet eum amet. Ex quod ad delectus illum iure. Modi et quasi numquam?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, et enim? Nam, corporis. Dolores omnis dolorem beatae praesentium odit ducimus possimus natus? Nam, neque ut. Quod odit voluptatum ullam obcaecati.</p>
          <b className='text-gray-800'>Our Vision</b>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur accusantium, voluptas maiores molestiae magnam eaque dignissimos nihil alias deleniti. Qui reiciendis maxime eligendi optio. Explicabo consequuntur mollitia non architecto exercitationem.</p>
        </div>
      </div>

      <div className='text-xl my-4'>
        <p>WHY<span className='text-gray-700 font-semibold'></span>CHOOSE US</p>
      </div>

      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Efficiency:</b>
         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente expedita maiores voluptas iusto n</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Convenience:</b>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente expedita maiores voluptas iusto n</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Personalization:</b>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente expedita maiores voluptas iusto n</p>
        </div>
      </div>
    </div>
  )
}

export default About
