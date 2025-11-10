import React from 'react';
import TestimonialCard from './cards/TestimonialCard';
import nicorai from '../assets/nicorai.png';


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
    name:"David Lee",
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
  {
    name: "Kevin Chung",
    role: "Lead Developer, Sparklight",
    imgSrc: nicorai,
    quote: "As a developer, I appreciate how clean and fast tib is. As a manager, I love that my entire team is finally on the same page. No more 'Where is that file?' or 'What's the status on this?'"
  },
  {
    name: "Maria Gomez",
    role: "E-commerce Manager",
    imgSrc: nicorai,
    quote: "Our inventory management was a nightmare. tib connected directly to our store and automated all our order processing. We're handling 3x the volume with the same size team."
  },
  {
    name: "Tom Iwata",
    role: "Freelance Designer",
    imgSrc: nicorai,
    quote: "tib is one of those tools I never close. It manages my client proposals, project tracking, and invoicing. It's the 'CEO' of my one-person business, so I can just focus on design."
  },
  {
    name: "Jasmine Kaur",
    role: "Operations, QuickMove",
    imgSrc: nicorai,
    quote: "The quality and clarity tib provides is unmatched. We can see our entire operations at a glance. It's just as valuable as it is intuitive, and our team adopted it in less than a day."
  },
  {
    name: "Alex Johnson",
    role: "Proprietor, The Local Roast",
    imgSrc: nicorai,
    quote: "I used to spend my Sundays doing payroll and invoices. With tib, it's a 10-minute task. The reporting features also showed me my most profitable items, which was a complete surprise!"
  },
  {
    name: "Ryan Higa",
    role: "Consultant, Higa Strategy",
    imgSrc: nicorai,
    quote: "This is the app I've been trying to build with spreadsheets for years. tib just works. Client onboarding is smooth, and tracking project value is effortless. I highly recommend it."
  },
];

const Testimonials = () => {
  return (
    // Updated to bg-white
    <section id="testimonials" className="py-20 px-25 bg-white ">
      <div className="relative container mx-auto px-4">
        {/* Updated title to match image */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-[#141414] mb-16">
          What our users are saying.
        </h2>

        {/* This creates the masonry/staggered layout */}
        <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {testimonials.map((t, i) => (
            <TestimonialCard
              key={i}
              name={t.name}
              role={t.role}
              quote={t.quote}
              imgSrc={t.imgSrc} 
            />
          ))}
        </div>
        <div className="absolute bottom-0 left-0 w-full h-64 bg-linear-to-t from-white to-transparent pointer-events-none" />
      </div>
    </section>
  );
};

export default Testimonials;