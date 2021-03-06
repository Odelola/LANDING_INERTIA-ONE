import React from 'react';
import TestimonialsCard from './TestimonialsCard';
import testimonialOne from '../images/testimonialsImages/testimonials-1.jpg'
import testimonialTwo from '../images/testimonialsImages/testimonials-2.jpg'
import testimonialThree from '../images/testimonialsImages/testimonials-3.jpg'
import testimonialFour from '../images/testimonialsImages/testimonials-4.jpg'
import './Testimonials.css';

function Testimonials() {
    return (
        <section className="testimonials default-padding" id="testimonials">
            <div className="testimonials-header text-center">
                <h3 className="section-header">What our clients say about us</h3>
                <p className="bold">Here are comments from clients that make us blush.</p>
            </div>
            <div className="testimonials-carousel d-flex">
                <div class="testimonials-cards d-flex jcsb" data-aos="fade-up-right">
                    <TestimonialsCard image={testimonialOne} title="Clara's Speech" name="Clara Rose" username="@clara_rose" />
                    <TestimonialsCard image={testimonialTwo} title="Mike's Speech" name="Mike Bill" username="@mike_bill1" />
                    <TestimonialsCard image={testimonialThree} title="Emma's Speech" name="Emma white" username="@emma_white_20" />
                    {/* <TestimonialsCard image={testimonialFour} title="Jake's Speech" name="Jake Gate" username="@gatejake" /> */}
                </div>
            </div>
            <div class="testimonials-button d-flex x-center">
                <a href="#" class="btn btn-primary m-g-r-15">Get started</a>
                <a href="#" class="btn btn-secondary">How it works</a>
            </div>
        </section>
    )
}

export default Testimonials;
