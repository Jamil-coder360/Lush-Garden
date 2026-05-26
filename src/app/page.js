"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

// Import Hero Slide background assets
import hero1 from "@/assets/hero.png";
import hero2 from "@/assets/hero2.png";
import hero3 from "@/assets/hero3.png";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");
  const [cartCount, setCartCount] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Slider data
  const slides = [
    {
      id: "01",
      title: "Nature's Beauty Delivered to You",
      subtitle: "Nature's beauty is just a click away with our online flower and plant shop. We offer a wide variety of flowers and planters that will bring a touch of nature to your home!",
      image: hero1,
      bgPosition: "object-bottom",
    },
    {
      id: "02",
      title: "Breathe Life Into Your Spaces",
      subtitle: "Explore our curated collection of indoor tropical house plants, hand-selected to improve air quality and enhance your interior design aesthetics.",
      image: hero2,
      bgPosition: "object-center",
    },
    {
      id: "03",
      title: "Curated Planters & Elegant Florals",
      subtitle: "Add a splash of color and architectural form to your home. Our custom clay and ceramic pots paired with premium orchids and tulips look stunning.",
      image: hero3,
      bgPosition: "object-center",
    },
  ];

  // Auto-play slider every 8 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [slides.length]);

  // Product Catalog data
  const products = [
    {
      id: 1,
      name: "Golden Barrel Cactus",
      category: "cacti",
      price: "$29.00",
      rating: 5,
      image: hero1,
      tag: "Best Seller",
    },
    {
      id: 2,
      name: "Monstera Deliciosa",
      category: "tropical",
      price: "$45.00",
      rating: 5,
      image: hero2,
      tag: "Popular",
    },
    {
      id: 3,
      name: "Phalaenopsis Orchid Duo",
      category: "floral",
      price: "$59.00",
      rating: 4,
      image: hero3,
      tag: "Elegant",
    },
    {
      id: 4,
      name: "Symmetric Clay Planters",
      category: "planters",
      price: "$24.00",
      rating: 5,
      image: hero3,
      tag: "Handmade",
    },
    {
      id: 5,
      name: "Zebra Succulent Duo",
      category: "cacti",
      price: "$19.00",
      rating: 4,
      image: hero1,
      tag: "Low Care",
    },
    {
      id: 6,
      name: "Premium Snake Plant",
      category: "tropical",
      price: "$34.00",
      rating: 5,
      image: hero2,
      tag: "Air Purifying",
    },
  ];

  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);

  const handleAddToCart = () => {
    setCartCount((prev) => prev + 1);
    // Subtle notification alert or feedback
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
      setTimeout(() => setFormSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <div className="relative">
      {/* Floating Cart Indicator */}
      {cartCount > 0 && (
        <div className="fixed bottom-6 right-6 z-40 bg-brand-green text-white px-5 py-3 rounded-full shadow-2xl flex items-center gap-3 border border-white/20 animate-bounce">
          <span className="font-semibold text-sm">🛒 Cart ({cartCount})</span>
          <button
            onClick={() => setCartCount(0)}
            className="text-xs text-white/70 hover:text-white bg-white/10 hover:bg-white/25 px-2 py-0.5 rounded"
          >
            Clear
          </button>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 1. HERO SECTION (WITH SLIDER) */}
      {/* ========================================================================= */}
      <section id="home" className="relative min-h-screen w-full flex flex-col justify-center overflow-hidden">
        {/* Background Image Carousel with absolute coverage */}
        <div className="absolute inset-0 -z-10 bg-brand-dark">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? "opacity-60 scale-100" : "opacity-0 scale-105"
              } transition-transform duration-1000`}
            >
              <Image
                src={slide.image}
                alt={`Lush Slide ${slide.id}`}
                fill
                priority={index === 0}
                className={`object-cover ${slide.bgPosition}`}
                sizes="100vw"
              />
            </div>
          ))}
          {/* Subtle gradient overlay to enhance readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-brand-dark/45" />
        </div>

        {/* Hero Content Container */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full pt-28 pb-16 flex flex-col justify-between flex-grow">
          <div className="my-auto flex flex-col items-center text-center max-w-4xl mx-auto">
            {/* Animated Title */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1] animate-fade-in-up">
              {slides[currentSlide].title}
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mb-10 leading-relaxed font-light animate-fade-in-up animation-delay-200">
              {slides[currentSlide].subtitle}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto animate-fade-in-up animation-delay-400">
              <Link
                href="#planters"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-brand-green hover:bg-brand-green-hover text-white text-base font-medium rounded-md shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
              >
                Book Now
              </Link>
              <button
                onClick={() => setIsVideoOpen(true)}
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 glassmorphism hover:bg-white/20 text-white text-base font-medium rounded-md transition-all duration-300"
              >
                {/* Play Button Icon */}
                <svg
                  className="w-5 h-5 mr-3 text-white fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
                Watch Video
              </button>
            </div>
          </div>

          {/* Slider indicators on the right edge & subtle prompt below */}
          <div className="flex justify-between items-end mt-8">
            {/* Scroll Indicator */}
            <div className="hidden sm:flex items-center gap-2 text-white/50 text-xs tracking-widest uppercase">
              <span className="w-8 h-[1px] bg-white/30" />
              Scroll down to explore
            </div>

            {/* Pagination Controls */}
            <div className="flex sm:flex-col items-center gap-4 ml-auto">
              {slides.map((slide, index) => (
                <button
                  key={slide.id}
                  onClick={() => setCurrentSlide(index)}
                  className={`text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                    index === currentSlide
                      ? "text-white scale-110"
                      : "text-white/40 hover:text-white/70"
                  }`}
                  aria-label={`Go to slide ${slide.id}`}
                >
                  <span>{slide.id}</span>
                  {index === currentSlide && (
                    <span className="hidden sm:inline-block w-4 h-[2px] bg-white rounded" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. ABOUT US SECTION */}
      {/* ========================================================================= */}
      <section id="about" className="py-24 md:py-32 bg-white text-brand-dark">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="flex flex-col gap-6">
              <span className="text-xs font-semibold tracking-wider text-sage-medium uppercase">
                Discover Lush Garden
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#162a1e]">
                We Believe in the Reconnecting Power of Nature
              </h2>
              <p className="text-base text-brand-dark/75 leading-relaxed">
                At Lush, we do more than just sell plants; we design living sanctuaries.
                Whether you're looking to turn a dark corner into a tropical retreat or 
                add architectural definition to your hallway with desert cacti, we offer 
                curated species and artisanal pots crafted to bring serenity and fresh 
                inspiration to your daily life.
              </p>
              <p className="text-base text-brand-dark/75 leading-relaxed">
                Our plant experts travel globally to source resilient varieties and hand-pick 
                planters that offer the optimal growth environment. Reclaim your environment 
                one leaf at a time.
              </p>

              {/* Statistics Grid */}
              <div className="grid grid-cols-3 gap-6 mt-6 border-t border-[#2b4436]/10 pt-8">
                <div>
                  <h4 className="text-3xl md:text-4xl font-bold text-brand-green">15k+</h4>
                  <p className="text-xs text-brand-dark/60 mt-1 uppercase tracking-wider">
                    Happy Clients
                  </p>
                </div>
                <div>
                  <h4 className="text-3xl md:text-4xl font-bold text-brand-green">50+</h4>
                  <p className="text-xs text-brand-dark/60 mt-1 uppercase tracking-wider">
                    Plant Varieties
                  </p>
                </div>
                <div>
                  <h4 className="text-3xl md:text-4xl font-bold text-brand-green">99%</h4>
                  <p className="text-xs text-brand-dark/60 mt-1 uppercase tracking-wider">
                    Satisfaction
                  </p>
                </div>
              </div>
            </div>

            {/* Right Images (Overlapping Visuals) */}
            <div className="relative h-[480px] w-full hidden md:block">
              <div className="absolute top-0 left-0 w-3/4 h-[85%] rounded-lg overflow-hidden shadow-2xl border border-sage-light/20">
                <Image
                  src={hero2}
                  alt="Lush Tropical Plant"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute bottom-0 right-0 w-2/3 h-[70%] rounded-lg overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src={hero3}
                  alt="Artisanal Planter and Flowers"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. PLANTERS CATALOG SECTION */}
      {/* ========================================================================= */}
      <section id="planters" className="py-24 md:py-32 bg-[#f4f7f5] text-brand-dark">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <span className="text-xs font-semibold tracking-wider text-sage-medium uppercase">
                Curated Shop
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#162a1e] mt-2">
                Elevate Your Green Space
              </h2>
            </div>
            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2 border-b md:border-b-0 pb-4 md:pb-0">
              {[
                { id: "all", name: "All Products" },
                { id: "cacti", name: "Cacti" },
                { id: "tropical", name: "Tropical" },
                { id: "floral", name: "Florals" },
                { id: "planters", name: "Planters" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id)}
                  className={`px-4 py-2 text-xs font-medium rounded-full transition-all duration-300 ${
                    activeCategory === tab.id
                      ? "bg-brand-green text-white shadow-md"
                      : "bg-white text-[#597364] hover:bg-[#e8ece9]"
                  }`}
                >
                  {tab.name}
                </button>
              ))}
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl border border-sage-light/10 transition-all duration-500 flex flex-col justify-between"
              >
                {/* Image Wrapper */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-sage-bg">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Badge */}
                  <span className="absolute top-4 left-4 bg-brand-dark/80 text-white text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded backdrop-blur-sm">
                    {product.tag}
                  </span>
                </div>

                {/* Details */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold text-sage-medium uppercase tracking-wider">
                      {product.category}
                    </span>
                    <h3 className="text-lg font-bold text-[#162a1e] mt-1 group-hover:text-brand-green transition-colors">
                      {product.name}
                    </h3>
                    {/* Stars */}
                    <div className="flex items-center gap-1 mt-2 text-[#c8a27b]">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <span key={i} className={i < product.rating ? "opacity-100" : "opacity-30"}>
                          ★
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-6 pt-4 border-t border-[#f1f5f3]">
                    <span className="text-xl font-bold text-[#162a1e]">
                      {product.price}
                    </span>
                    <button
                      onClick={handleAddToCart}
                      className="px-4 py-2 bg-brand-green text-white text-xs font-semibold rounded hover:bg-brand-green-hover transition-colors shadow-sm"
                    >
                      Add to Bag
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. CONTACT SECTION */}
      {/* ========================================================================= */}
      <section id="contact" className="py-24 md:py-32 bg-white text-brand-dark">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Info Grid (4 cols) */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              <div>
                <span className="text-xs font-semibold tracking-wider text-sage-medium uppercase">
                  Let's Connect
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#162a1e] mt-2">
                  Bring Nature Home Today
                </h2>
              </div>
              <p className="text-base text-brand-dark/75 leading-relaxed">
                Have questions about caring for a specific species, or want to arrange a 
                personalized consultation for your space? Get in touch with our design team.
              </p>

              {/* Office Details */}
              <div className="flex flex-col gap-6 mt-4">
                <div className="flex gap-4 items-start">
                  <span className="w-10 h-10 rounded-full bg-[#f4f7f5] flex items-center justify-center font-bold text-brand-green">
                    📍
                  </span>
                  <div>
                    <h4 className="text-sm font-semibold text-brand-dark">Our Boutique</h4>
                    <p className="text-sm text-brand-dark/70 mt-0.5">
                      123 Botanist Boulevard, Greenhouse District
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <span className="w-10 h-10 rounded-full bg-[#f4f7f5] flex items-center justify-center font-bold text-brand-green">
                    📞
                  </span>
                  <div>
                    <h4 className="text-sm font-semibold text-brand-dark">Direct Line</h4>
                    <p className="text-sm text-brand-dark/70 mt-0.5">
                      +1 (234) 567-890
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <span className="w-10 h-10 rounded-full bg-[#f4f7f5] flex items-center justify-center font-bold text-brand-green">
                    ✉️
                  </span>
                  <div>
                    <h4 className="text-sm font-semibold text-brand-dark">Email Support</h4>
                    <p className="text-sm text-brand-dark/70 mt-0.5">
                      support@lushgarden.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form (7 cols) */}
            <div className="lg:col-span-7 bg-[#f4f7f5] p-8 md:p-12 rounded-2xl border border-sage-light/20 shadow-sm">
              <h3 className="text-xl font-bold text-[#162a1e] mb-6">
                Request a Free Design Call
              </h3>
              <form onSubmit={handleContactSubmit} className="flex flex-col gap-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-xs font-semibold text-brand-dark/80">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      placeholder="e.g. John Doe"
                      className="w-full bg-white text-sm px-4 py-3 rounded-md border border-sage-light focus:outline-none focus:border-brand-green transition-colors text-brand-dark"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-xs font-semibold text-brand-dark/80">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      placeholder="e.g. john@example.com"
                      className="w-full bg-white text-sm px-4 py-3 rounded-md border border-sage-light focus:outline-none focus:border-brand-green transition-colors text-brand-dark"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-xs font-semibold text-brand-dark/80">
                    Tell us about your space
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    placeholder="Describe the rooms, lighting conditions, and plant varieties you're interested in..."
                    className="w-full bg-white text-sm px-4 py-3 rounded-md border border-sage-light focus:outline-none focus:border-brand-green transition-colors text-brand-dark"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-brand-green hover:bg-brand-green-hover disabled:bg-sage-medium text-white text-sm font-semibold rounded-md shadow-md transition-colors flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    "Send Request"
                  )}
                </button>

                {formSubmitted && (
                  <p className="text-sm text-brand-green bg-green-50 p-4 rounded-md border border-green-200 text-center font-medium animate-fade-in">
                    ✓ Request sent! Our plant designers will reach out to you within 24 hours.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. WATCH VIDEO MODAL CONTAINER */}
      {/* ========================================================================= */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-dark/90 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden aspect-video shadow-2xl border border-white/10">
            {/* Close Button */}
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 hover:bg-black text-white text-2xl flex items-center justify-center transition-colors focus:outline-none"
              aria-label="Close video"
            >
              &times;
            </button>
            {/* Embedded video player - using a beautiful copyright-free calming botanical nature video */}
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/5Wq129sJ3-A?autoplay=1"
              title="Soothing Garden Plants video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </div>
  );
}