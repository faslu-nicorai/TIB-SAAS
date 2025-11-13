import React, { useEffect, useState } from 'react';
import TestimonialCard from '../cards/TestimonialCard';
import nicorai from '../../assets/nicorai.png';


// I've added more testimonials based on your image
const testimonials = [
  {
    name: "Sarah Chen",
    role: "Founder, Artisan Goods",
    imgSrc: nicorai,
    quote: "tib replaced three different spreadsheets and an invoicing app for me. I've cut my admin time in half and can finally focus on growing my business instead of just managing it."
  },
  {
    name: "Marcus Cole",
    role: "COO, Apex Logistics",
    imgSrc: nicorai,
    quote: "We can't imagine our operations process without tib. We were drowning in manual order entry. Now, the entire flow from client request to final invoice is automated and clear. It's built to scale with us."
  },
  {
    name: "Alisha Khan",
    role: "CEO, Innovate Tech",
    imgSrc: nicorai,
    quote: "tib is a game-changer for founders. I finally have a real-time dashboard for all our core metrics—clients, orders, and revenue. We stopped managing the chaos and started making smart decisions."
  },
  {
    name: "David Lee",
    role: "Finance Director, Creative Labs",
    imgSrc: nicorai,
    quote: "I love having all client data, project hours, and billing in one unified system. tib has streamlined our invoicing, reduced errors, and helped us get paid 20% faster. It's indispensable."
  },
  {
    name: "Emily Rodriguez",
    role: "Head of Accounts, Studio Nine",
    imgSrc: nicorai,
    quote: "All my homies love tib. I mean that. It's our team's single source of truth for every client. I can see all order history, contact info, and project status in one click."
  },
  {
    name: "James O'Connor",
    role: "Owner, O'Connor Build Co.",
    imgSrc: nicorai,
    quote: "I finally deleted that folder of 1,500 unorganized invoices and client notes. I haven't looked back since. Shoutout to the tib team for building the tool we actually needed."
  },
];

const Testimonials = () => {
  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      if (w < 768) setVisibleCount(4);           // mobile
      else if (w < 1024) setVisibleCount(6);     // tablet
      else setVisibleCount(testimonials.length); // desktop
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <section id="testimonials" className="py-10 md:py-20 px-4 md:px-25 bg-white relative z-10">
      <div className="relative container mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-[#141414] mb-8 md:mb-16 px-4">
          What our users are saying.
        </h2>

        {/* Mobile view: Simple column layout */}
        <div className="md:hidden space-y-6 px-4">
          {testimonials.slice(0, visibleCount).map((t, i) => (
            <TestimonialCard
              key={i}
              name={t.name}
              role={t.role}
              quote={t.quote}
              imgSrc={t.imgSrc}
            />
          ))}
        </div>

        {/* Desktop view: Masonry layout */}
        <div className="hidden md:block">
          <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-3 gap-6 space-y-6 px-4">
            {testimonials.slice(0, visibleCount).map((t, i) => (
              <TestimonialCard
                key={i}
                name={t.name}
                role={t.role}
                quote={t.quote}
                imgSrc={t.imgSrc}
              />
            ))}
          </div>
          <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-white to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;