import AccordionItem from '@/components/ui/pricingPageUi/AccordionItem'
import React from 'react'
import faqData from '@/mocks/faqData.json'

function FaQ() {
    return (
        <section id="hero" className="bg-white py-20 md:py-20 relative z-10">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[black] leading-tight max-w-3xl text-center mx-auto mb-8 sm:mb-12 md:mb-20 px-4">
                Frequently asked questions
            </h2>
            <div className="max-w-4xl mx-auto px-4 space-y-6">
                {faqData.map((item, index) => (
                    <AccordionItem
                        key={index}
                        question={item.question}
                        answer={item.answer}
                    />
                ))}
            </div>

            <div className='text-center font-bold mt-12 px-4 mb-4'>
                <p className="text-[#707070] text-base">
                    Still have more questions? Find answers in our{" "}
                    <a
                        href="#"
                        className="underline font-bold text-black hover:opacity-70"
                    >
                        help center
                    </a>
                    .
                </p>
            </div>

        </section>
    )
}

export default FaQ