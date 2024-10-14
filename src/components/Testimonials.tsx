import { TESTIMONIALS } from '@/constants';
import { Divide } from 'lucide-react';
import Image from 'next/image';
import React from 'react'

function Testimonials() {
  return (
    <div className='container mx-auto border-b my-20 pb-10'>
      <h2 className='text-center text-3xl mb-20 tracking-tighter sm:text-4xl lg:text-5xl'>
        What our Clients said
      </h2>
      <div className='flex flex-wrap'>
          {TESTIMONIALS.map((Testimonial, index) =>(
            <div key={index} className='w-full p-2 md:w-1/2 lg:w-1/4'>
              <div className='rounded-xl border p-4'>
               <div className='flex  items-center'>
                <Image className='mr-4 rounded-full border-4 border-neutral-400'src={Testimonial.image} width={80} height={80} alt={Testimonial.name}/>
                <div >
                <h4 className='w-full '>{Testimonial.name}</h4>
                <span className='text-sm text-neutral-600'>
                  {Testimonial.instagram}
                </span>
                </div>
               </div>
               <p className='p-4'>{Testimonial.feedback}</p>
               <p className='text-sm text-neutral-400'>{Testimonial.city_country}</p>
               </div>
            </div>
          ))}
      </div>
    </div>
  )
};

export default Testimonials;