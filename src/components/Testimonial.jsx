import { MdNavigateNext } from 'react-icons/md'
import { useState } from 'react'
import { GrFormPrevious } from 'react-icons/gr'


const Testimonial = ({
    testimonials
}) => {
    const [currentSlide, setCurrentSlide] = useState(0)

    const nextSlide = () => {
        setCurrentSlide(prevSlide =>
            prevSlide === testimonials.length - 1 ? 0 : prevSlide + 1
        )
    }

    const prevSlide = () => {
        setCurrentSlide(prevSlide =>
            prevSlide === 0 ? testimonials.length - 1 : prevSlide - 1
        )
    }

    return (
        <div className='p-9 min-h-screen'>
            <div className='my-9'>
                <p className=' text-primaryColor font-semibold my-5'>__Testimonials</p>
                <h1 className='sm:text-4xl text-3xl font-semibold'>
                    Hear <span className=' text-primary'>What</span> Others Have to Say
                </h1>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <div className=' sm:w-[60%] relative flex items-center justify-center flex-col'>
                    {/* ///////---Testimonial Content */}

                    <div className='max-w-lg w-full  p-5 rounded-xl shadow border flex items-center justify-center flex-col gap-5'>
                        <p className='text-gray-600 text-center'>
                            {testimonials[currentSlide].text}
                        </p>
                        <div className='w-[100px] h-[100px] border rounded-full overflow-hidden'>
                            <img
                                src={testimonials[currentSlide].imgSrc}
                                alt='testimonail'
                                className=' object-cover w-[100px]'
                            />
                        </div>
                        <div className='text-center'>
                            <h2 className='text-xl font-bold mb-2'>
                                {testimonials[currentSlide].name}
                            </h2>

                            <p>
                                <span className='text-slate-500 font-semibold'>CEO of </span>
                                TeamWork
                            </p>
                        </div>
                    </div>

                    {/* /////////---Navigation Buttons */}
                    <div className='absolute inset-y-0 left-0 flex items-center'>
                        <button
                            onClick={prevSlide}
                            className='p-1 text-black rounded-lg bg-bgPrimary text-3xl'
                        >
                            <GrFormPrevious />
                        </button>
                    </div>
                    <div className='absolute inset-y-0 right-0 flex items-center'>
                        <button
                            onClick={nextSlide}
                            className='p-1 text-black bg-bgPrimary rounded-lg text-3xl'
                        >
                            <MdNavigateNext />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial