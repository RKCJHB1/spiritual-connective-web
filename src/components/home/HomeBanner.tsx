
import React, { useState, useEffect } from 'react';
import Button from '../shared/Button';

// Banner slide interface
interface BannerSlide {
  image: string;
  title: string;
  subtitle: string;
  buttonText?: string;
  buttonLink?: string;
}

// Banner slides data
const bannerSlides: BannerSlide[] = [
  {
    image: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80',
    title: 'Welcome to Ramakrishna Centre',
    subtitle: 'A spiritual sanctuary dedicated to the teachings of Sri Ramakrishna, Holy Mother Sri Sarada Devi, and Swami Vivekananda',
    buttonText: 'Explore Our Centre',
    buttonLink: '/about/our-centre',
  },
  {
    image: 'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80',
    title: 'Join Our Spiritual Journey',
    subtitle: 'Discover the profound teachings of Vedanta and experience spiritual growth through our various programs',
    buttonText: 'View Services',
    buttonLink: '/services',
  },
  {
    image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80',
    title: 'Support Our New Ashram Project',
    subtitle: 'Help us build a new spiritual center to serve our growing community in Johannesburg',
    buttonText: 'Learn More',
    buttonLink: '/new-ashram-project',
  },
];

const HomeBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-rotate slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerSlides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  // Handle manual navigation
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % bannerSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + bannerSlides.length) % bannerSlides.length);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Slides */}
      <div className="relative h-full w-full">
        {bannerSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 w-full h-full bg-black/40 z-10"></div>
            <div
              className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transform scale-105 transition-transform duration-10000"
              style={{
                backgroundImage: `url(${slide.image})`,
                animation: index === currentSlide ? 'zoomBg 10s forwards' : 'none',
              }}
            ></div>

            {/* Content */}
            <div className="relative z-20 h-full flex items-center justify-center text-center px-6">
              <div className={`max-w-4xl ${index === currentSlide ? 'animate-slide-in' : ''}`}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
                  {slide.title}
                </h1>
                <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                  {slide.subtitle}
                </p>
                {slide.buttonText && slide.buttonLink && (
                  <Button href={slide.buttonLink} size="lg">
                    {slide.buttonText}
                  </Button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full backdrop-blur-sm transition-all"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full backdrop-blur-sm transition-all"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
        {bannerSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? 'bg-white scale-100' : 'bg-white/50 scale-75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default HomeBanner;
