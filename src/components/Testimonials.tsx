'use client'

import { Star, ChevronRight, Quote, Shield, ChevronLeft, ChevronRight as ChevronRightIcon } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

export default function Testimonials() {
  const testimonials = [
    {
      company: 'Royal Shalimar - Birmingham',
      content: 'STAYCONNECTED transformed our restaurant\'s security infrastructure with their comprehensive CCTV and alarm systems. The professional installation and ongoing support have given us complete peace of mind.',
      author: 'W Kayani',
      position: 'Director',
      rating: 5,
      avatar: 'WK'
    },
    {
      company: 'TechStart Solutions',
      content: 'Their network design and implementation exceeded our expectations. The team\'s expertise in wireless infrastructure helped us scale our operations seamlessly.',
      author: 'Sarah Johnson',
      position: 'CTO',
      rating: 5,
      avatar: 'SJ'
    },
    {
      company: 'Metro Office Complex',
      content: 'The smart automation systems they installed have significantly improved our building\'s efficiency and security. Highly recommend their services.',
      author: 'Michael Chen',
      position: 'Facilities Manager',
      rating: 5,
      avatar: 'MC'
    },
    {
      company: 'Retail Chain UK',
      content: 'STAYCONNECTED\'s managed IT services have been invaluable. Their 24/7 monitoring and rapid response times keep our business running smoothly.',
      author: 'Emma Thompson',
      position: 'IT Director',
      rating: 5,
      avatar: 'ET'
    }
  ]

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-brand-red/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-brand-blue/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-brand-red/10 border border-brand-red/20 rounded-full text-brand-red text-sm font-medium mb-6">
            <Shield className="w-4 h-4 mr-2" />
            Client Testimonials
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            What Our <span className="bg-gradient-to-r from-brand-red to-brand-red-light bg-clip-text text-transparent">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our satisfied clients have to say about our services and solutions.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Navigation Buttons - Top Right */}
          <div className="absolute -top-16 right-4 z-30 flex space-x-3">
            <button className="swiper-button-prev-custom w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-110 group">
              <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
            </button>
            <button className="swiper-button-next-custom w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-110 group">
              <ChevronRightIcon className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
            }}
            className="testimonials-swiper"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 h-full">
                  {/* Quote Icon */}
                  <div className="absolute top-6 right-20 w-12 h-12 bg-brand-red/20 rounded-full flex items-center justify-center">
                    <Quote className="w-6 h-6 text-brand-red" />
                  </div>

                  {/* Rating */}
                  <div className="flex items-center mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  {/* Content */}
                  <p className="text-gray-300 leading-relaxed mb-8 text-lg">
                    "{testimonial.content}"
                  </p>
                  
                  {/* Author Info */}
                  <div className="flex items-center">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-brand-red to-brand-red-light rounded-full flex items-center justify-center text-white font-bold">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <div className="font-semibold text-white text-lg">
                          {testimonial.author}
                        </div>
                        <div className="text-gray-400 text-sm">
                          {testimonial.position}
                        </div>
                        <div className="text-brand-red text-sm font-medium">
                          {testimonial.company}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  )
}
